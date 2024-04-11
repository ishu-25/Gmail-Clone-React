import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import social from '../images/social.png'
import {signInWithPopup} from 'firebase/auth';
import {auth, database, googleProvider} from '../firebase/setup';
import {doc,setDoc} from "firebase/firestore";

const Login = () => {

    const navigate = useNavigate()

    const addUser = async() =>{

        const userDoc = doc(database,'Users',`${auth.currentUser?.email}`)

        try {
            await setDoc(userDoc,{
                username:auth.currentUser?.displayName,
                email:auth.currentUser?.email,
                id:auth.currentUser?.uid
            })
        } catch (err) {
            console.error(err)
        }
    }

    const googleSignin = async() =>{
        try {
            await signInWithPopup(auth,googleProvider)
            addUser()
            
            navigate('/main')
        } catch (error) {
            console.log(error)
        }
    }

    console.log(auth);

    return (
        <div style={{position:"absolute",left:"28%",padding:"110px"}}>
        <div style={{border:"1px solid grey",padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"330px",maxWidth:"400px"}}>
            <img style={{width:"70px"}} src={social}/>
        <h2 style={{fontWeight:"200",paddingBottom:'20px'}}>Log-in your google clone account</h2>
        <h3 style={{fontWeight:"200",paddingBottom:'10px'}}>Click the Log-in button</h3>
        <Button onClick={googleSignin} variant='contained'>Log-in with google</Button>
        <div className="signin-account">Don't have an account?<br/> <span onClick={()=>navigate('/signin')}> Click here for Sign-In</span></div>
        </div>
    </div>
    )
}



export default Login;



