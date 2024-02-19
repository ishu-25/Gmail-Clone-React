import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pen from '../images/pen.png'
import { TextField } from '@mui/material';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';

const style = {
    position: 'absolute',
    top: '61%',
    left: '71%',
    transform: 'translate(-50%, -50%)',
    width: "37vw",
    height: "20vw",
    minHeight: "472px",
    bgcolor: 'background.paper',
    padding: "1vw",
};

export default function Message(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [mailId, setMailId] = React.useState('')
    const [message, setMessage] = React.useState('')

    const send = async () => {

        const userDoc = doc(database, 'Users', `${auth.currentUser?.email}`)
        const messageRef = collection(userDoc, 'send')

        try {
            await addDoc(messageRef, {
                email: message,
                sender: auth.currentUser?.displayName
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
                sender: auth.currentUser?.displayName
            })
            send()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            {/* {props.showFullPanel ? (
                <> */}
                    <div onClick={handleOpen} style={{cursor:'pointer',height: '4vw', marginLeft: '1vw', width: '12vw', display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#BEE0FF' }}>
                        <img src={pen} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                        <h4 style={{ marginLeft: '1.6vw', fontWeight: '400', fontSize: '1.2vw', fontFamily: "Google Sans" }}>Compose</h4>
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
                            <TextField variant='standard' label='Subject' sx={{ width: "36vw" }} /><br />
                            <TextField onChange={(e) => setMessage(e.target.value)} multiline rows={12} sx={{ width: "36vw", "& fieldset": { border: "none" } }} /><br />
                            <Button onClick={inbox} variant='contained' sx={{ borderRadius: "6vw", fontSize: '1vw', width: "4vw", height: "2.5vw" }}>Send</Button>
                        </Box>
                    </Modal>
                {/* </>
            ):(<div onClick={props.toggleFullPanel} style={{ borderRadius: '10px', backgroundColor: '#BEE0FF',marginTop: '0.5vw', marginLeft: '0.8vw', width: '4vw', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0.4vw', borderRadius: '20px' }}>
                    <img src={pen} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                    </div>)} */}
        </div>
    )
}