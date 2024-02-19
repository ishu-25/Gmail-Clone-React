import React,{useState} from 'react'
import inbox from '../images/inbox.png'
import star from '../images/star.png'
import snooze from '../images/snooze.png'
import send from '../images/send.png'
import Message from './Message'


function Leftpanel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(null);
    

    const handleItemClick = (index, collect) => {
        setActiveIndex(index);
        props.setSubCollect(collect);
    };

    const handleMouseEnter = (index) =>setHovered(index);
    const handleMouseLeave = () => setHovered(null);
    
    
    
    return (
        <div style={{position:'fixed', backgroundColor:'#F9F9F9', minHeight:'100vh',width:'19.6vw'}}>

            <Message />
            <div onClick={() => handleItemClick(0, 'Inbox')}
            onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                style={{marginTop:'1vw',
                    backgroundColor: activeIndex === 0 ? '#BEE0FF' : hovered === 0 ? '#D3D3D3' : '#F9F9F9',marginTop:'0.5vw', marginLeft:'0.8vw' ,width:'15vw', display: 'flex', alignItems: 'center',cursor:'pointer',padding:'0.4vw',borderRadius:'20px'}}>
                <img src={inbox} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{cursor:'pointer', marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Inbox</span>
            </div>

            <div onClick={() => handleItemClick(1, 'Starred')}
            onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: activeIndex === 1? '#BEE0FF' : hovered === 1 ? '#D3D3D3':'#F9F9F9',marginTop:'0.5vw', marginLeft:'0.8vw' ,width:'15vw', display: 'flex', alignItems: 'center',cursor:'pointer',padding:'0.4vw',borderRadius:'20px'}}>
                <img src={star} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{cursor:'pointer', marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Starred</span>
            </div>

            <div onClick={() => handleItemClick(2, 'Snoozed')}
            onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: activeIndex === 2 ? '#BEE0FF' : hovered === 2 ? '#D3D3D3' : '#F9F9F9',marginTop:'0.5vw', marginLeft:'0.8vw' ,width:'15vw', display: 'flex', alignItems: 'center',cursor:'pointer',padding:'0.4vw',borderRadius:'20px'}}>
                <img src={snooze} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{cursor:'pointer', marginLeft: '1.6vw', fontWeight:'400', fontSize:'1.1vw',fontFamily: "Google Sans" }}>Snoozed</span>
            </div>

            <div  onClick={() => handleItemClick(3, 'send')}
            onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: activeIndex === 3? '#BEE0FF' : hovered === 3 ? '#D3D3D3' : '#F9F9F9',marginTop:'0.5vw', marginLeft:'0.8vw' ,width:'15vw', display: 'flex', alignItems: 'center',cursor:'pointer',padding:'0.4vw',borderRadius:'20px'}}>
                <img src={send} style={{ width: '1.2vw', marginLeft: '2vw' }} />
                <span style={{ marginLeft: '1.6vw', fontWeight:'400' , fontSize:'1.1vw',fontFamily: "Google Sans"}}>Sent</span>
            </div>
        </div>
    )
}

export default Leftpanel