import React from 'react';
import { useNavigate } from 'react-router-dom';
import user_icon from '../images/person.png'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'
import social from '../images/social.png'
import { Button } from '@mui/material';


const Signin = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='container'>
                <img src={social} alt='logo' />
                <div className="header">
                    <div className="text">Sign-Up</div>
                    <div className="underline"></div>
                </div>
                <div className='usega'><h4>Use your Google Account</h4></div>

                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input name='text' type="text" placeholder='Name' />
                    </div>

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" name='email' placeholder='Email Id' />
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input name='passeord' type="password" placeholder='Password' />
                    </div>

                    <div className="submit-container">
                        <Button variant='contained'>Sign Up</Button>
                        <Button variant='contained' onClick={() => navigate('/')}>Log In</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;