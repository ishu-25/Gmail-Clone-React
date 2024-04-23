import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lens from "../images/lens.png";
import back from "../images/back.png";
import archive from "../images/archive.png";
import { getDatabase, ref, child, get } from "firebase/database";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
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


function Openmail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMail, setSelectedMail] = useState(null);
  // const [emailData, setEmailData] = useState(null);



// const emailOpen = ref(getDatabase())
// // const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
// //     const messageDoc = doc(userDoc, `${props.subCollect ? props.subCollect : "Inbox"}`, `${data.id}`);
// get(child(emailOpen,`Users/${id}`)).then((docSnap)=>{
//   if(docSnap.exists()){
//     console.log(docSnap.val())
//   }else{
//     console.log('No Data Available')
//   }
// }).catch((err)=>{
//   console.error(err)
// })



  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase());
  };



  const mailOpen = async ()=>{
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    console.log('userDoc',userDoc)
    const messageDoc = doc(userDoc, "Inbox", `${auth.currentUser?.id}`);
    console.log('messageDoc',messageDoc)
    try {
      const docSnap = await getDoc(messageDoc);
      if (docSnap.exists()) {
        const mailData = { id: docSnap.id, ...docSnap.data()};
        if (selectedMail && selectedMail.id === mailData.id) {
          return mailData;
      } else {
          setSelectedMail(mailData);
      }
      } else {
        console.log("No Data Available !!!!");
      }
    }catch(err){
      console.error(err)
    }
  }
  


useEffect(() => {
  mailOpen()
  // const q = query(collection(db, "buddies"))
  // const unsub = onSnapshot(q, (querySnapshot) => {
  //   console.log("Data", querySnapshot.docs.map(d => doc.data()));
  // });
}, [])

// useEffect(() => {
//   const fetchEmailData = async () => {
//     try {
//       const emailDocRef = doc(database, "emailData", id);
//       const emailExists = await getDoc(emailDocRef);

//       if (emailExists.exists()) {
//         const emailData = emailExists.data();
//         setEmailData(emailData);
//       } else {
//         console.log("Email document not found");
//       }
//     } catch (error) {
//       console.error("Error fetching email data:", error);
//     }
   
//   };

//   fetchEmailData();
// }, [id]);

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
        
               {/* {id} */}
            {/* {mailData && mailData.subject} */}
            <img src={printer} style={{ cursor:'pointer', width: "1.3vw",height: "1.3vw", marginTop: "1vw",marginLeft: props.isOpen ? "55vw" : "68.5vw"}}/>
            <img src={launch}  style={{cursor:'pointer', width: "1.3vw", height: "1.3vw",marginTop: "1vw",marginLeft: "1vw",}}/>

        </div>
      </div>
          </div>
  );
}
export default Openmail;

