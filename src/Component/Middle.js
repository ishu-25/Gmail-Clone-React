import { List, ListItem, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import star from '../images/star.png';
import refresh from '../images/refresh.png';
import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';
import remove from '../images/bin.png';
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png";

function Middle(props) {
  const [mailData, setMailData] = useState([]);

  const deleteMail = async (data) => {
    const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, 'Inbox', `${data.id}`);
    try {
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

  useEffect(() => {
    getMail();
  }, [props.subCollect]);

  const [hoveredEmailId, setHoveredEmailId] = useState(null);

  return (
    <div style={{ marginLeft: '2.9vw', width: '75vw', paddingTop: '6vw' }}>
      <img src={refresh} style={{ width: '1.4vw', height: '1.4vw', marginLeft: '1.5vw', marginTop: '2vw' }} />
      {props.search
        ? mailData
            .filter((data) => data.sender == props.search)
            .map((data) => (
        <Paper key={data.id} elevation={0} style={{ backgroundColor: '#F8FCFF', borderTop: '1px solid #EFEFEF', borderBottom: '1px solid #EFEFEF' }}>
          <ListItem
            onMouseEnter={() => setHoveredEmailId(data.id)}
            onMouseLeave={() => setHoveredEmailId(null)}
          >
            <img src={star} style={{ width: '1.4vw', height: '1.4vw' }} />
            <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>{data.sender}
            <span style={{ marginLeft: '12vw', fontWeight: '200' }}>{data.email}</span></span>
            {hoveredEmailId === data.id && (
              <img onClick={() => deleteMail(data)} src={remove} style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }} />
            )}
          </ListItem>
        </Paper>
      )): mailData.map((data) => (
            <Paper
              key={data.id}
              elevation={0}
              style={{
                backgroundColor: '#F8FCFF',
                borderTop: '1px solid #EFEFEF',
                borderBottom: '1px solid #EFEFEF',
              }}
            >
              <ListItem
                onMouseEnter={() => setHoveredEmailId(data.id)}
                onMouseLeave={() => setHoveredEmailId(null)}
              >
                <img src={star} style={{ width: '1.4vw', height: '1.4vw' }} />
                <span style={{ fontSize: '1.3vw', marginLeft: '1.2vw', fontWeight: '500' }}>
                  {data.sender}
                  <span style={{ marginLeft: '12vw', fontWeight: '200' }}>{data.email}</span>
                </span>
                {hoveredEmailId === data.id && (
                  <img
                    onClick={() => deleteMail(data)}
                    src={remove}
                    style={{ width: '1.1vw', height: '1.1vw', marginLeft: '1vw', cursor: 'pointer' }}
                  />
                )}
              </ListItem>
            </Paper>
          ))}

      <h6 style={{ fontWeight: '400', marginLeft: '28vw',marginTop:'1vw',marginBottom:'1vw' }}>Terms · Privacy · Program Policies</h6>
    </div>
  );
}

export default Middle;