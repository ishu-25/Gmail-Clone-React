import React, { useState } from 'react'
import inbox from '../images/inbox.png'
import star from '../images/star.png'
import snooze from '../images/snooze.png'
import send from '../images/send.png'
import Message from './Message'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import gmail from "../images/gmail.png"
import menu from "../images/menu.png"
import { Grid } from '@mui/material';


function Leftpanel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(null);

    // const [isOpen, setIsOpen] = useState(false)
    // const toggleSideBar = () => setIsOpen(!isOpen)

    const handleItemClick = (index, collect) => {
        setActiveIndex(index);
        props.setSubCollect(collect);
    };

    const handleMouseEnter = (index) => setHovered(index);
    const handleMouseLeave = () => setHovered(null);



    return (
        <div style={{ top: '0', position: 'fixed', backgroundColor: '#F9F9F9', minHeight: '100vh', width: '19.6vw' }}>
             
            <Grid item xs={2}>
                <div style={{ top:'0',paddingBottom:'1vw',paddingTop:'1vw' ,display: "flex", alignItems: "center" }}>
                    <IconButton 
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: "0.8vw", color: "#3C3C3C" }}>
                        <img src={menu} style={{ width: "2vw", marginLeft: "2vw" }} />
                    </IconButton>
                    <img style={{ width: "2.3vw" }} src={gmail} />
                    <Typography sx={{ color: "#3C3C3C", marginLeft: "1vw", fontSize: "1.8vw" }} variant="h6" component="div">
                        Gmail
                    </Typography>
                </div>
            </Grid>
            <div>
                <Message />

                <div onClick={() => handleItemClick(0, 'Inbox')}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        marginTop: '1vw',
                        backgroundColor: activeIndex === 0 ? '#BEE0FF' : hovered === 0 ? '#D3D3D3' : '#F9F9F9', marginTop: '0.5vw', marginLeft: '0.8vw', width: '15vw', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0.4vw', borderRadius: '20px'
                    }}>
                    <img src={inbox} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                    <span style={{ cursor: 'pointer', marginLeft: '1.6vw', fontWeight: '400', fontSize: '1.1vw', fontFamily: "Google Sans" }}>Inbox</span>
                </div>

                <div onClick={() => handleItemClick(1, 'Starred')}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        backgroundColor: activeIndex === 1 ? '#BEE0FF' : hovered === 1 ? '#D3D3D3' : '#F9F9F9', marginTop: '0.5vw', marginLeft: '0.8vw', width: '15vw', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0.4vw', borderRadius: '20px'
                    }}>
                    <img src={star} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                    <span style={{ cursor: 'pointer', marginLeft: '1.6vw', fontWeight: '400', fontSize: '1.1vw', fontFamily: "Google Sans" }}>Starred</span>
                </div>

                <div onClick={() => handleItemClick(2, 'Snoozed')}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        backgroundColor: activeIndex === 2 ? '#BEE0FF' : hovered === 2 ? '#D3D3D3' : '#F9F9F9', marginTop: '0.5vw', marginLeft: '0.8vw', width: '15vw', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0.4vw', borderRadius: '20px'
                    }}>
                    <img src={snooze} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                    <span style={{ cursor: 'pointer', marginLeft: '1.6vw', fontWeight: '400', fontSize: '1.1vw', fontFamily: "Google Sans" }}>Snoozed</span>
                </div>

                <div onClick={() => handleItemClick(3, 'send')}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        backgroundColor: activeIndex === 3 ? '#BEE0FF' : hovered === 3 ? '#D3D3D3' : '#F9F9F9', marginTop: '0.5vw', marginLeft: '0.8vw', width: '15vw', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0.4vw', borderRadius: '20px'
                    }}>
                    <img src={send} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                    <span style={{ marginLeft: '1.6vw', fontWeight: '400', fontSize: '1.1vw', fontFamily: "Google Sans" }}>Sent</span>
                </div>
            </div>
        </div>
    )
}

export default Leftpanel