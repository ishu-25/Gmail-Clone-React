import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { auth, googleProvider } from '../firebase/setup';
import logout from '../images/logout.png'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '34%',
  left: '79%',
  transform: 'translate(-50%, -50%)',
  width:'30vw',
  height:'20vw',
  bgcolor: '#D8E4F0',
  boxShadow: 24,  
  borderRadius: '4vw',
  p: 4,
  padding:'2vw'
};

export default function Profile() {

const navigate = useNavigate()

const logoutAccount =async()=>{
  try {
    await signOut(auth,googleProvider)
    auth.currentUser === null && navigate("/")
  } catch (error) {
    console.error()
  }
}
console.log(auth)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar onClick={handleOpen} sx={{ marginLeft:'13.3vw', width:'2.7vw', height:'2.7vw' ,cursor:'pointer'}} src={auth.currentUser?.photoURL} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign:'center', fontSize:'1.2vw'}}>
            {auth.currentUser?.email}
          </Typography>
          <Avatar src={auth.currentUser?.photoURL} style={{marginLeft:'11.6vw',width:'6vw',height:'6vw'}}/>
          <Typography sx={{textAlign:'center', fontSize:'1.5vw'}}>
            Hey, {auth.currentUser?.displayName}
          </Typography>
          <button onClick={logoutAccount} style={{cursor:'pointer',fontSize:'1vw' ,border:'1px solid white',marginLeft:'8.5vw',marginTop:'2vw',borderRadius:'2vw',width:'12vw',height:'4vw'}}>
          <img src={logout} style={{height:'1vw', width:'1vw',paddingRight:'1vw'}}/>
          Sign out
          </button>
          <Typography style={{textAlign:'center', fontSize:'0.8vw',fontWeight:'100',marginTop:'1vw'}}>
          Privacy Policy Terms of Service
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
