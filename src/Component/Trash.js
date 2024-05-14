import React from 'react'
import bin from "../images/bin.png"

function Trash(props) {

  
  return (
    <>
<div 
                onClick={() => props.handleItemClick(4, 'Trash')}
                onMouseEnter={() => props.handleMouseEnter(4)}
                onMouseLeave={props.handleMouseLeave}
                style={{
                      width:props.isOpen ? '17vw' : '2.3vw',
                      position:'relative',
                      cursor:'pointer',
                      backgroundColor: props.activeIndex === 4 ? '#BEE0FF' : props.hovered === 4 ? '#D3D3D3' : '#F9F9F9', 
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

                <img src={bin} style={{ width: '1.2vw', marginLeft:props.isOpen ? '1.5vw' : 0  }} />

                {props.isOpen && (
                <span style={{ 
                    cursor: 'pointer', 
                    marginLeft: '1.6vw', 
                    fontWeight: '400', 
                    fontSize: '1.1vw', 
                    fontFamily: "'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif"}}>
                    Trash
                </span>)}
            </div>

    </>
  )
}

export default Trash