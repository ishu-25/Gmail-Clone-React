import { List, ListItem, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import star from '../images/star.png'
import refresh from '../images/refresh.png'
import { doc, collection, getDocs } from 'firebase/firestore'
import { auth,database } from '../firebase/setup'

function Middle(props) {

  const [mailData,setMailData] = useState([])

  const getMail = async() =>{

    const userDoc = doc(database,'Users',`${auth.currentUser?.email}`)
    const messageDoc = collection(userDoc,`${props.subCollect ? props.subCollect : 'Inbox'}`)
    try {
        const data = await getDocs(messageDoc)
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id:data.id
        }))
        setMailData(filteredData)
    } catch (err) {
        console.error(err)
    }
}

useEffect(()=>{
  getMail()
},[props.subCollect])

// console.log(mailData)

  return (
    <div style={{marginLeft:'2.9vw',width:'75vw',paddingTop:'6vw'}}>
    <img src={refresh} style={{width:'1.4vw',height:'1.4vw', marginLeft:'1.5vw', marginTop:'2vw'}}/>
    {mailData.map((data)=>{
      return <>
      <Paper elevation={0} style={{backgroundColor:'#F8FCFF' ,borderTop:'1px solid #EFEFEF', borderBottom:'1px solid #EFEFEF'}}>
        <ListItem>
          <img src={star} style={{width:'1.4vw',height:'1.4vw'}}/>
          <span style={{fontSize:'1.3vw' ,marginLeft:'1.2vw', fontWeight:'500'}}>{data.sender}<span style={{marginLeft:'12vw', fontWeight:'200'}}>{data.email}</span></span>
        </ListItem>
    </Paper>
      </>
    })}
    <h6 style={{fontWeight:'400',marginLeft:'28vw'}}>Terms · Privacy · Program Policies</h6>
    </div>
  )
}

export default Middle