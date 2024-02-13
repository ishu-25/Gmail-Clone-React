import React from 'react'
import inbox from '../images/inbox.png'
import star from '../images/star.png'
import snooze from '../images/snooze.png'
import send from '../images/send.png'
import Message from './Message'


function Leftpanel(props) {
    return (
        <div style={{ backgroundColor:'#F9F9F9', minHeight:'100vh',paddingTop:'6vw',position:'fixed',width:'19.6vw' }}>

            <Message />

            <div style={{marginTop:'1vw', marginLeft:'0.8vw' ,width:'12vw', display: 'flex', alignItems: 'center'}}>
                <img src={inbox} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span onClick={()=>props.setSubCollect('Inbox')} style={{cursor:'pointer', marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Inbox</span>
            </div>

            <div style={{marginTop:'1vw', marginLeft:'0.8vw' ,width:'12vw', display: 'flex', alignItems: 'center'}}>
                <img src={star} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{ marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Starred</span>
            </div>

            <div style={{marginTop:'1vw', marginLeft:'0.8vw' ,width:'12vw', display: 'flex', alignItems: 'center'}}>
                <img src={snooze} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{ marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Snoozed</span>
            </div>

            <div style={{marginTop:'1vw', marginLeft:'0.8vw' ,width:'12vw', display: 'flex', alignItems: 'center'}}>
                <img src={send} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span onClick={()=>props.setSubCollect('send')} style={{cursor:'pointer', marginLeft: '1.6vw', fontWeight:'400' , fontSize:'1.1vw',fontFamily: "Google Sans"}}>Sent</span>
            </div>
        </div>
    )
}

export default Leftpanel