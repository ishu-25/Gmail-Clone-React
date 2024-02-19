import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import tasks from '../images/tasks.png'
import { Button } from '@mui/material';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '92%',
  transform: 'translate(-50%, -50%)',
  width: '18vw',
  height: '50vh', 
  overflowY: 'auto', 
  minHeight:'650px',
  bgcolor: 'background.paper',
  padding: '2vw',
};

export default function Tasks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [task,setTask] = React.useState("")
  const [taskData,setTaskData] = React.useState([])

  const addTasks = async()=>{
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`)
    const messageRef = collection(userDoc, "Tasks")
    try{
        await addDoc(messageRef,{
           task:task
        })
        alert("Task added successfully!");
    }catch(err){
        console.error(err)
    }
  }


  const showTasks = async()=>{
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`)
    const messageRef = collection(userDoc, "Tasks")
    try{
       const data = await getDocs(messageRef)
       const filteredData = data.docs.map((doc)=>({
             ...doc.data(),
             id:doc.id
       }))
       setTaskData(filteredData)
    }catch(err){
        console.error(err)
    }
  }

  return (
    <div>
      <img onClick={handleOpen} src={tasks} style={{cursor:"pointer",width:'1.4vw', paddingTop:'2vw'}}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{paddingTop:'3vw',fontSize:'1vw',color:'grey'}}>
            Add Tasks
          </Typography>
          <input onChange={(e)=>setTask(e.target.value)} placeholder='Notes' style={{outline:"none",fontSize:"1vw",width:"11vw",height:"1.5vw"}}/>
          <Button onClick={addTasks} variant='contained' sx={{fontSize:"1vw",width:"4vw",height:"2vw",marginTop:"1vw",marginRight:"1vw"}} >Add</Button>
          <Button onClick={showTasks} variant='contained' sx={{fontSize:"1vw",width:"4vw",height:"2vw",marginTop:"1vw"}} >Show</Button>
          <br/>
          {taskData.map((data)=>{
            return <>
             <li style={{marginTop:"0.5vw",fontSize:"1vw"}}>{data.task}</li>
            </>
          })}
        </Box>
      </Modal>
    </div>
  );
}     