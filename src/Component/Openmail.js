import React, { useEffect, useState ,useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import lens from "../images/lens.png";
import back from "../images/back.png";
import archive from "../images/archive.png";
import { LeftpanelInfo } from './Middle';
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { Avatar } from '@mui/material';
import { auth, database } from "../firebase/setup";
import printer from "../images/printer.png";
import launch from "../images/launch.png";
import rep from "../images/report.png";
import bin from "../images/bin.png";
import line from "../images/line.png";
import mail from "../images/mail.png";
import snooze from "../images/snooze.png";
import task from "../images/task.png";
import moveto from "../images/moveto.png";
import label from "../images/label.png";
import dots from "../images/dots.png";
import larrow from "../images/left arrow.png";
import rarrow from "../images/right arrow.png";
import barrow from "../images/bottom arrow.png";
import key from "../images/keyboard.png";
import reply from "../images/reply.png";
import forward from "../images/Forward.png";
import smile from "../images/smile.png";
import { sideContext } from "../App";


function Openmail(props) {

  const {getMailCalled,setGetMailCalled} = useContext(sideContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [mailData, setMailData] = useState(null);
  
  

  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase());
  };

  const mailOpen = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const inboxDoc = doc(userDoc, "Inbox", `${id}`);
    const starredDoc = doc(userDoc, "Starred", `${id}`);
    const snoozedDoc = doc(userDoc, "Snoozed", `${id}`);
    const sendDoc = doc(userDoc, "send", `${id}`);
    const trashDoc = doc(userDoc, "Trash", `${id}`);
  
  try {
    let docSnap;
    let mailData;
    
    const getMailData = async (doc) => {
        docSnap = await getDoc(doc);
        if (docSnap.exists()) {
            mailData = { id: docSnap.id, ...docSnap.data() };
            return true;
        }
        return false;
    };

    switch (true) {
        case await getMailData(inboxDoc):
            break;
        case await getMailData(starredDoc):
            break;
        case await getMailData(snoozedDoc):
            break;
        case await getMailData(sendDoc):
            break;
        case await getMailData(trashDoc):
            break;    
        default:
            break;
    }

    if (mailData) {
        setMailData(mailData);
    } 
} catch (err) {
    console.error(err);
}
};


useEffect(() => {
  mailOpen()
}, [])

useEffect(() => {
  if (getMailCalled) { 
    navigate("/main");
    setGetMailCalled(false)
  }
}, [getMailCalled,setGetMailCalled]);


  return (
    <div style={{ marginLeft: "19.6vw", width: "74vw" }}>
      <div
        style={{ zIndex: "1",position: "fixed",backgroundColor: "#F9F9F9",top: "0",width: "75.5vw", height: "5vw"}}>
        
        <div
          style={{marginTop: "0.7vw",marginLeft: "0.5vw",display: "flex",alignItems: "center",borderRadius: "40px",backgroundColor: "#E4EFFA",width: "55vw",height: "3.7vw"}}>
         
          <img
            src={lens}
            style={{width: "1.3vw",height: "1.3vw",alignItems: "center",marginLeft: "15px",}}/>

          <input
            onChange={searchHandler}
            placeholder='Search mail'
            style={{marginLeft: "3vw",height: "3vw",width: "45vw",backgroundColor: "#E4EFFA",border: "none",outline: "none",fontSize: "1vw",}}/>
   
        </div>
      </div>

      <div
        style={{marginLeft: props.isOpen ? "1.5vw" : "-12vw",width: props.isOpen ? "74vw" : "88vw",}}>

        <div style={{ paddingBottom: "1vw", marginTop: "5vw" }}>
          <img
            onClick={() => navigate("/main")}
            src={back}
            style={{ cursor:'pointer',width: "1.4vw", height: "1.4vw", marginTop: "1.5vw" }} />

          <img
            src={archive}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>

          <img
            src={rep}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>

          <img
            src={bin}
            style={{cursor:'pointer',width: "1vw",height: "1.2vw",marginBottom: "0.2vw",marginLeft: "1.5vw",}}/> 

          <img
            src={line}
            style={{width: "1.5vw",height: "1.5vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>

          <img
            src={mail}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          <img
            src={snooze}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          <img
            src={task}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          <img
            src={line}
            style={{width: "1.5vw",height: "1.5vw",marginTop: "2vw",marginLeft: "1.5vw"}}/>

          <img
            src={moveto}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          <img
            src={label}
            style={{cursor:'pointer',width: "1.3vw",height: "1.3vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          <img
            src={dots}
            style={{cursor:'pointer',width: "1.1vw",height: "1.1vw",marginTop: "2vw",marginLeft: "1.5vw",}}/>   

          
          <img
            src={larrow}
            style={{cursor: "pointer",width: "1.1vw",height: "1.2vw",marginLeft:  props.isOpen ? "32vw" : "45.5vw",marginBottom: "0.4vw",}}/> 

          <img
            src={rarrow}
            style={{cursor: "pointer",width: "1.1vw",height: "1.2vw",marginLeft: "1.5vw",marginBottom: "0.4vw",}}/>

          <img
            src={key}
            style={{cursor: "pointer",width: "1.5vw",height: "1.6vw",marginLeft: "1.5vw",marginTop: "2vw",}}/>
              

          <img 
          src={barrow} 
          style={{cursor: "pointer", width: "1.3vw",height: "1.3vw", marginBottom: "0.4vw"}} />

        </div>

        <div style={{fontSize:'1vw'}}>
        
               
        {mailData ? (
        <div>
          <div style={{display:'flex',flexDirection:'row'}}>
            
            <div style={{width:props.isOpen?'100vw':'112vw',fontSize:'2vw',marginLeft:'3.5vw',paddingBottom:'1.5vw',marginTop:'1vw',whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>
            {mailData.subject} 
            </div>
            
            <div style={{marginLeft: props.isOpen ? "1vw" : "1vw",marginTop:'1vw',width:'10vw'}}>
            <img src={printer} style={{ cursor:'pointer', width: "1.3vw",height: "1.3vw"}}/>
            <img src={launch}  style={{cursor:'pointer', width: "2.3vw", height: "1.3vw",marginLeft: "1vw",paddingRight:'1vw'}}/>
            </div>
            
          </div>

          
          
          <div  style={{marginRight:'4vw',display:'flex',flexDirection:'row'}}>
          <Avatar src={mailData.senderPhoto} />
          
          <div style={{marginLeft:'0.5vw',fontSize:'1.1vw',fontWeight:'600',display:'flex',flexDirection:'row'}}> 
            {mailData.sender}
          
            <h5 style={{marginLeft:'0.3vw',fontWeight:'200',fontSize:'1vw',color:'gray'}}>
            {'<'+ mailData.senderEmailId +'>'} 
            </h5>
            
          </div>
          
          </div>


          <div style={{marginLeft:'3.5vw',marginRight:'4vw'}}>
          <p style={{content:'center'}} >{mailData.email}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
            
        </div>
      </div>
      
      <div style={{marginLeft: props.isOpen ? "4.5vw" : "-9vw"}}>

        <button style={{border:'1px solid gray',backgroundColor:'white',minHeight:'2.5vw',marginTop:'2vw',borderRadius:'1.5vw',paddingRight:'1vw'}}>
        <img src={reply} style={{marginRight:'1vw',marginLeft:'1vw'}}/>Reply</button>

        <button style={{border:'1px solid gray',backgroundColor:'white',minHeight:'2.5vw',marginTop:'2vw',marginLeft:'1vw',borderRadius:'1.5vw',paddingRight:'1vw'}}>
        <img src={forward} style={{marginRight:'1vw',marginLeft:'1vw'}}/>Forward</button>

        <button style={{border:'1px solid gray',backgroundColor:'white',minHeight:'2.5vw',marginLeft:'1vw',borderRadius:'2vw'}}>
        <img src={smile} style={{marginRight:'0.7vw',marginLeft:'0.7vw',width:'1.2vw'}}/></button>
      
      </div>
    </div>
  );
}
export default Openmail;