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
                      width:props.isOpen ? '17vw' : '2.3vw',
                      position:'relative',
                      cursor:'pointer',
                      backgroundColor: props.activeIndex === 3 ? '#BEE0FF' : props.hovered === 3 ? '#D3D3D3' : '#F9F9F9', 
                      border:'none',
                      height:'2.3vw',
                      borderRadius: '3vw',
                      borderTopLeftRadius: props.isOpen ? 0 : '3vw',
                      borderBottomLeftRadius: props.isOpen ? 0 : '3vw',
                      padding:'0.5vw',
                      display: 'flex',
                      alignItems: 'center', 
                      marginLeft: props.isOpen ? 0 : '1.5vw' 
                      }}>

                <img src={send} style={{ width: '1.1vw',marginLeft:props.isOpen ? '1.5vw' : 0  }} />

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