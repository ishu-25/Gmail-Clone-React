import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pen from '../images/pen.png'
import { TextField } from '@mui/material';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';

const style = {
    position: 'absolute',
    top: '61%',
    left: '71%',
    transform: 'translate(-50%, -50%)',
    width: "37vw",
    height: "21vw",
    minHeight: "472px",
    bgcolor: 'background.paper',
    padding: "1vw",
};

export default function Message(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [mailId, setMailId] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')



    const send = async () => {

        const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`)
        const messageRef = collection(userDoc, 'send')
        
        try {
            await addDoc(messageRef, {
                email: message,
                sender: auth.currentUser?.displayName,
                createdAt:serverTimestamp(),
                subject:subject,
                senderEmailId: auth.currentUser?.email,
                senderPhoto:auth.currentUser?.photoURL,
            })
        } catch (err) {
            console.error(err)
        }
    }

    const inbox = async () => {

        const userDoc = doc(database, 'Users', `${mailId}`)
        const messageRef = collection(userDoc, 'Inbox')

        try {
            await addDoc(messageRef, {
                email: message,
                sender: auth.currentUser?.displayName,
                createdAt:serverTimestamp(),
                subject:subject,
                senderEmailId: auth.currentUser?.email,
                senderPhoto:auth.currentUser?.photoURL,
            });
            console.log(messageRef)
            send()
            handleClose()
        } catch (err) {
            console.error(err)
        }
    }


    return (

        <div>

            <div onClick={handleOpen} style={{width:props.isOpen ?'10.7vw': '4vw',cursor: 'pointer', height: '4vw', marginLeft: '0.5vw', display: 'flex', alignItems: 'center', borderRadius: props.isOpen ? '1vw' : '1vw', backgroundColor: '#BEE0FF' }}>
                <img src={pen} style={{ width: '1.2vw', marginLeft: '1.5vw' }} />
                {props.isOpen && (<span style={{ marginLeft: '1.2vw', fontWeight: '400', fontSize: '1.2vw', fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif"}}>Compose</span>)}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box sx={style}>
                    <Typography style={{ backgroundColor: "#EDF9FF", position: 'absolute', top: "0", left: "0", width: "37vw", padding: "0.5vw", fontSize: "1vw" }}>
                        New Message
                    </Typography>
                   
                    <TextField onChange={(e) => setMailId(e.target.value)} variant='standard' label='To' sx={{ width: "36vw", marginTop: "1vw" }} /><br />
                    
                    <TextField onChange={(e)=>setSubject(e.target.value)} variant='standard' label='Subject' sx={{ width: "36vw" }} /><br />
                    
                    <TextField onChange={(e) => setMessage(e.target.value)} multiline rows={12} sx={{ width: "36vw", "& fieldset": { border: "none" } }} /><br />
                    
                    <Button onClick={inbox} variant='contained' sx={{ borderRadius: "6vw", fontSize: '1vw', width: "4vw", height: "2.3vw",marginBottom:'3.5vw' }}>Send</Button>
                </Box>
            </Modal>
        </div>

    )
}