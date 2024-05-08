import React from 'react'
import send from '../images/send.png'

function Send(props) {
  return (
    <>
<div 
                onClick={() => props.handleItemClick(3,  'send')}
                onMouseEnter={() => props.handleMouseEnter(3)}
                onMouseLeave={props.handleMouseLeave}
                style={{
                    marginTop: '1vw',
                    backgroundColor: props.activeIndex === 3 ? '#BEE0FF' : props.hovered === 3 ? '#D3D3D3' : '#F9F9F9', 
                    marginTop: '0.5vw', 
                    marginLeft: '0.8vw', 
                    width: props.isOpen ? '15vw' : '5vw', 
                    display: 'flex', 
                    alignItems: 'center', 
                    cursor: 'pointer', 
                    padding: '0.4vw', 
                    borderRadius: '30px'}}>

                <img src={send} style={{ width: '1.2vw', marginLeft: '1.5vw' }} />

                {props.isOpen && (
                <span style={{ 
                    cursor: 'pointer', 
                    marginLeft: '1.6vw', 
                    fontWeight: '400', 
                    fontSize: '1.1vw', 
                    fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif"}}>
                    Sent
                </span>)}
            </div>

    </>
  )
}

export default Send