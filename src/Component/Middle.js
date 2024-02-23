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


function Middle(props) {
  const [mailData, setMailData] = useState([]);

  const deleteMail = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, 'Inbox', `${data.id}`);
    const starredDoc = doc(userDoc, 'Starred', `${data.id}`);
    const snoozedDoc = doc(userDoc, 'Snoozed', `${data.id}`);
    const sendDoc = doc(userDoc, 'send', `${data.id}`);
    try {
      await deleteDoc(starredDoc);
      await deleteDoc(snoozedDoc);
      await deleteDoc(messageDoc);
      await deleteDoc(sendDoc);
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

  const handleRefresh = () => {
    getMail();
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

  const starredRemove = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const starredDoc = doc(userDoc, 'Starred', `${data.id}`);
    try {
      await deleteDoc(starredDoc);
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

    <div 
      style={{width: '74vw' }}>

      <div 
        style={{marginLeft:'19.6vw' ,zIndex: '1', position: 'fixed', backgroundColor: '#F9F9F9', top: '0', width: '75.5vw', height: '5vw' }}>
        
        
          
          <div 
            style={{ marginTop: '0.7vw', marginLeft: "0.5vw", display: "flex", alignItems: "center", 
            borderRadius: "40px", backgroundColor: "#E4EFFA", width: "55vw", height: "3.7vw" }}>
            
            <img 
            src={lens} 
            style={{ width: "1.3vw", height: "1.3vw", alignItems: "center", marginLeft: "15px" }} />
            
            <input 
            onChange={searchHandler} 
            placeholder='Search mail' 
            style={{ marginLeft: "3vw", height: "3vw", width: "45vw", backgroundColor: "#E4EFFA", 
            border: "none", outline: "none", fontSize: '1vw' }} />
          
          </div>
        
      </div>

      <div style={{marginLeft: props.isOpen ? '19.6vw' : '5.7vw', width: props.isOpen ? '74vw' : '85.3vw' }}>

      <div 
        style={{ paddingBottom: '1vw', boxShadow: ' 0 -1px 0 0', marginTop: '5vw'}}>
        
        <img 
        onClick={handleRefresh}
        src={refresh} 
        style={{ width: '1.4vw', height: '1.4vw', marginLeft: '1.5vw', marginTop: '2vw' }} />
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

                  {data.starred ? (
                  <>
                    <img onClick={() => starredRemove(data)} src={yellow} style={{ width: '1.4vw', height: '1.4vw', cursor: 'pointer' }} />
                  </>
                  ) : (
                    <img onClick={() => starred(data)} src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />
                  )}


                <span 
                  style={{ display: 'inline-block', fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
                  {data.sender}

                <span 
                  style={{ display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '200', cursor: "pointer", marginLeft: '12vw' }}>
                  {data.email}
                </span></span>

                {hoveredEmailId === data.id && (
                  <img 
                  onClick={() => snoozed(data)} 
                  src={snooze} 
                  style={{ width: '1.3vw', height: '1.3vw', marginLeft: '1vw', cursor: 'pointer' }} />)}

                {hoveredEmailId === data.id && (
                  <img 
                  onClick={() => deleteMail(data)} 
                  src={remove} 
                  style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
                )}
               
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
              {data.starred ? (
                  <>
                    <img onClick={() => starredRemove(data)} src={yellow} style={{ width: '1.4vw', height: '1.4vw', cursor: 'pointer' }} />
                  </>
                  ) : (
                    <img onClick={() => starred(data)} src={star} style={{ cursor: 'pointer', width: '1.4vw', height: '1.4vw' }} />
                  )}


                <span 
                  style={{  fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
                  {data.sender}

                <span 
                  style={{  overflow: 'hidden', textOverflow: 'ellipsis',marginLeft:'12vw', fontWeight: '200', cursor: "pointer" }}>
                  {data.email}
                </span></span>

                {hoveredEmailId === data.id && (
                  <img 
                  onClick={() => snoozed(data)} 
                  src={snooze} 
                  style={{  width: '1.3vw', height: '1.3vw', marginLeft: '1vw', cursor: 'pointer' }} />)}

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
</div>
  );
}

export default Middle;




