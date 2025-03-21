import React, { useState,useContext} from 'react'
import Message from './Message'
import gmail from "../images/gmail.png"
import menu from "../images/menu.png"
import Inbox from './Inbox'
import Starred from './Starred'
import Snoozed from './Snoozed'
import Send from './Send'
import Trash from './Trash';
import { sideContext } from '../App'
import { TbRuler2Off } from 'react-icons/tb'


function Leftpanel(props) {
    const {setGetMailCalled} = useContext(sideContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(null);
    const [menuhover, setMenuHover] = useState(false);

    const handleItemClick = (index, collect) => {
        setActiveIndex(index);
        props.setSubCollect(collect);
        setGetMailCalled(true)
    };

    const handleMouseEnter = (index) => setHovered(index);
    
        
    const handleMouseLeave = () => setHovered(null);


    return (
        
        <>

 
        <div style={{zIndex:'1', top: '0', position: 'fixed', backgroundColor: '#F9F9F9', minHeight: '100vh', width: props.isOpen ? '19.6vw':'5.7vw'}}
        onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
            
            <div style={{ height: '5vw', width: '20vw',backgroundColor:'#F9F9F9' }}>
                
                    <div style={{ paddingBottom: '1vw', paddingTop: '1vw',  display: "flex", alignItems: "center",flexDirection:'row'}}>
                        
                    <button 
                        onClick={props.toggleSideBar}
                        onMouseEnter={() => setMenuHover(true)}
                        onMouseLeave={() => setMenuHover(false)}
                        style={{minWidth:'3vw',cursor:'pointer',position:'fixed',backgroundColor: menuhover ?'#D3D3D3' : '#F9F9F9',border:'none',minHeight:'3vw',marginRight:'1vw',borderRadius:'3vw',marginLeft: "1vw" }}>
                        <img src={menu} style={{ width: "2vw"}}/>
                    </button>
                        
                        <img style={{cursor:'pointer',marginLeft:'5vw' ,width: "2.3vw" }} src={gmail} />
                        
                        <h6 style={{cursor:'pointer',fontWeight:'400', color: "#3C3C3C", marginLeft: "1vw", fontSize: "1.8vw",fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif" }} >
                            Gmail
                        </h6>
                        
                    </div>
                
            </div>

            
            <Message isOpen={props.isOpen}/>
            
            <Inbox handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                activeIndex={activeIndex}
                handleItemClick={handleItemClick}
                isOpen={props.isOpen}
            />

            <Starred handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                activeIndex={activeIndex}
                handleItemClick={handleItemClick}
                isOpen={props.isOpen}
                
            />

            <Snoozed handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                activeIndex={activeIndex}
                handleItemClick={handleItemClick}
                isOpen={props.isOpen}
            />

            <Send handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                activeIndex={activeIndex}
                handleItemClick={handleItemClick}
                isOpen={props.isOpen}
            />
            
            <Trash handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                hovered={hovered}
                activeIndex={activeIndex}
                handleItemClick={handleItemClick}
                isOpen={props.isOpen}
            />
            
        </div>
        </>
        
    )
}

export default Leftpanel


