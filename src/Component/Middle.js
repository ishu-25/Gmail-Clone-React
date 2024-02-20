import { ListItem, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import star from '../images/star.png';
import refresh from '../images/refresh.png';
import { doc, collection, getDocs, deleteDoc, setDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';
import remove from '../images/bin.png';
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png";
import lens from "../images/lens.png"
import { Grid } from '@mui/material';

function Middle(props) {
  const [mailData, setMailData] = useState([]);

  const deleteMail = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, 'Inbox', `${data.id}`);
    const starredDoc = doc(userDoc, 'Starred', `${data.id}`);
    const snoozedDoc = doc(userDoc, 'Snoozed', `${data.id}`);
    try {
      await deleteDoc(starredDoc);
      await deleteDoc(snoozedDoc);
      await deleteDoc(messageDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const getMail = async () => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = collection(userDoc, `${props.subCollect ? props.subCollect : 'Inbox'}`);
    try {
      const data = await getDocs(messageDoc);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setMailData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const starred = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, 'Starred', `${data.id}`);
    try {
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        starred: 'true'
      })
    } catch (err) {
      console.error(err)
    }
  }

  const snoozed = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, 'Snoozed', `${data.id}`);
    const snoozeDoc = doc(userDoc, 'Inbox', `${data.id}`)
    try {
      await deleteDoc(snoozeDoc)
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMail();
  }, [props.subCollect]);

  const [hoveredEmailId, setHoveredEmailId] = useState(null);

  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase())
  }




  return (

    <div style={{ marginLeft: '2.9vw', width: '74vw' }}>

    <div style={{zIndex:'1',position:'fixed', backgroundColor:'#F9F9F9',top:'0',width:'75.5vw',height:'5vw'}}>
      <Grid item xs={8}>
        <div style={{marginTop:'0.7vw', marginLeft: "0.5vw", display: "flex", alignItems: "center", borderRadius: "40px", backgroundColor: "#E4EFFA", width: "55vw", height: "3.7vw" }}>
          <img src={lens} style={{ width: "1.3vw", height: "1.3vw", alignItems: "center", marginLeft: "15px" }} />
          <input onChange={searchHandler} placeholder='Search mail' style={{ marginLeft: "3vw", height: "3vw", width: "45vw", backgroundColor: "#E4EFFA", border: "none", outline: "none", fontSize: '1vw' }} />
        </div>
      </Grid>
    </div>
     
    <div style={{marginTop:'5vw',width:'75vw'}}>
      <img src={refresh} style={{width: '1.4vw', height: '1.4vw', marginLeft: '1.5vw', marginTop: '2vw' }} />
    </div>
      
    {props.search ? mailData
      .filter((data) => data.sender?.toLowerCase().includes(props.search))
      .map((data) => {
        return <>
          <Paper
            onMouseEnter={() => setHoveredEmailId(data.id)}
            onMouseLeave={() => setHoveredEmailId(null)}
            key={data.id}
            elevation={0}
            style={{ backgroundColor: '#F8FCFF', borderTop: '1px solid #EFEFEF', borderBottom: '1px solid #EFEFEF' }}>
            <ListItem>
              {data.starred ? <img src={yellow} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} /> :
                <img onClick={() => starred(data)} src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />}
                 <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>{data.sender}
                 <span style={{ marginLeft: '12vw', fontWeight: '200', cursor: "pointer", marginLeft: '1vw' }}>{data.email}</span></span>
                 {hoveredEmailId === data.id && (
                  <img onClick={() => snoozed(data)} src={snooze} style={{ marginLeft: '1vw', width: '1.3vw', height: '1.3vw', marginLeft: '1vw', cursor: 'pointer' }} />)}
                 {hoveredEmailId === data.id && (
                  <img onClick={() => deleteMail(data)} src={remove} style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
                )
              }
            </ListItem>
          </Paper>
        </>
        }) : mailData.map((data) => {
          return <>
            <Paper
              onMouseEnter={() => setHoveredEmailId(data.id)}
              onMouseLeave={() => setHoveredEmailId(null)}
              key={data.id}
              elevation={0}
              style={{
                backgroundColor: '#F8FCFF',
                borderTop: '1px solid #EFEFEF',
                borderBottom: '1px solid #EFEFEF',
              }}
            >
              <ListItem>
                {data.starred ? <img src={yellow} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} /> :
                  <img onClick={() => starred(data)} src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />}
                <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
                  {data.sender}
                  <span style={{ marginLeft: '12vw', fontWeight: '200' }}>{data.email}</span>
                </span>
                {hoveredEmailId === data.id && (
                  <img onClick={() => snoozed(data)} src={snooze} style={{ marginLeft: "1vw", width: '1.3vw', height: '1.3vw', marginLeft: '1vw', cursor: 'pointer' }} />)}
                {hoveredEmailId === data.id && (
                  <img
                    onClick={() => deleteMail(data)}
                    src={remove}
                    style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
                )}
              </ListItem>
            </Paper>
          </>
        })}

      <h6 style={{ fontWeight: '400', marginLeft: '28vw', marginTop: '1vw', marginBottom: '1vw', fontSize: '1vw' }}>Terms · Privacy · Program Policies</h6>
    </div>

  );
}

export default Middle;