import React, { useState} from 'react'
import Message from './Message'
import gmail from "../images/gmail.png"
import menu from "../images/menu.png"
import Inbox from './Inbox'
import Starred from './Starred'
import Snoozed from './Snoozed'
import Send from './Send'
import Trash from './Trash';


function Leftpanel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(null);

    const handleItemClick = (index, collect) => {
        setActiveIndex(index);
        props.setSubCollect(collect);
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
                        
                        <button onClick={props.toggleSideBar}
                            style={{cursor:'pointer',position:'fixed',backgroundColor:'#F9F9F9', border:'none',marginRight:'1vw'}}>
                            <img src={menu} style={{ width: "2vw", marginLeft: "2vw" }} />
                        </button>
                        
                        <img style={{marginLeft:'5vw' ,width: "2.3vw" }} src={gmail} />
                        
                        <h6 style={{fontWeight:'400', color: "#3C3C3C", marginLeft: "1vw", fontSize: "1.8vw",fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif" }} >
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


