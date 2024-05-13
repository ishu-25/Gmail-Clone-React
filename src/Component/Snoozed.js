import React from 'react'
import snooze from '../images/snooze.png'

function Snoozed(props) {
  return (
    <>
<div 
                onClick={() => props.handleItemClick(2, 'Snoozed')}
                onMouseEnter={() => props.handleMouseEnter(2)}
                onMouseLeave={props.handleMouseLeave}
                style={{
                      marginTop: '0.5vw',
                      width:props.isOpen ? '17vw' : '2.3vw',
                      position:'relative',
                      cursor:'pointer',
                      backgroundColor: props.activeIndex === 2 ? '#BEE0FF' : props.hovered === 2 ? '#D3D3D3' : '#F9F9F9', 
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

                <img src={snooze} style={{ width: '1.2vw', marginLeft:props.isOpen ? '1.5vw' : 0 }} />

                {props.isOpen && (
                <span style={{ 
                    cursor: 'pointer', 
                    marginLeft: '1.6vw', 
                    fontWeight: '400', 
                    fontSize: '1.1vw', 
                    fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif"}}>
                    Snoozed
                </span>)}
            </div>

    </>
  )
}

export default Snoozed