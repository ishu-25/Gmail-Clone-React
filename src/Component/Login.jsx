import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'
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
        <>
            <div className='container'>
                <img src={social} alt='logo' />
                <div className="header">
                    <div className="text">Log-In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <form>
                        <input type="email"  name='email' placeholder='Email Id' />
                        </form>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <form>
                        <input type="password" name='password' placeholder='Password' />
                        </form>
                    </div>

                </div>
                <div className="forgot-password"> <span>Forget Password?</span>
                    <h4 >Not your computer? Use Guest mode to sign in privately.</h4>
                    <div className='signin'>
                        <Button onClick={googleSignin} variant='contained'>Log-In With Google</Button>
                    </div>
                </div>

                <div className="submit-container">
                    <Button variant='contained' onClick={()=>navigate('/signin')}>Sign Up</Button>
                    <Button variant='contained' >Log In</Button>
                </div>
            </div>
        </>
    )
}



export default Login;