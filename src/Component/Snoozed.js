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
                    marginTop: '1vw',
                    backgroundColor: props.activeIndex === 2 ? '#BEE0FF' : props.hovered === 2 ? '#D3D3D3' : '#F9F9F9', 
                    marginTop: '0.5vw', 
                    marginLeft: '0.8vw', 
                    width: props.isOpen ? '15vw' : '5vw', 
                    display: 'flex', 
                    alignItems: 'center', 
                    cursor: 'pointer', 
                    padding: '0.4vw', 
                    borderRadius: '30px'}}>

                <img src={snooze} style={{ width: '1.2vw', marginLeft: '1.5vw' }} />

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