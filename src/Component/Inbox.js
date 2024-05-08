import React from 'react'
import inbox from '../images/inbox.png'
// import { useNavigate } from 'react-router-dom'

function Inbox(props) {
    // const navigate = useNavigate()
  return (
    <>
<div 
                onClick={() => props.handleItemClick(0, 'Inbox')}
                // onClick={()=>navigate('/main/inbox')}
                onMouseEnter={() => props.handleMouseEnter(0)}
                onMouseLeave={props.handleMouseLeave}
                style={{
                    marginTop: '1vw',
                    backgroundColor: props.activeIndex === 0 ? '#BEE0FF' : props.hovered === 0 ? '#D3D3D3' : '#F9F9F9', 
                    marginTop: '0.5vw', 
                    marginLeft: '0.8vw', 
                    width: props.isOpen ? '15vw' : '5vw', 
                    display: 'flex', 
                    alignItems: 'center', 
                    cursor: 'pointer', 
                    padding: '0.4vw', 
                    borderRadius: '30px'}}>

                <img src={inbox} style={{ width: '1.2vw', marginLeft: '1.5vw' }} />

                {props.isOpen && (
                <span style={{ 
                    cursor: 'pointer', 
                    marginLeft: '1.6vw', 
                    fontWeight: '400', 
                    fontSize: '1.1vw', 
                    fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif"}}>
                    Inbox
                </span>)}
            </div>

    </>
  )
}

export default Inbox