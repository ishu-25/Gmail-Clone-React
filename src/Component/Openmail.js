import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lens from "../images/lens.png"
import back from "../images/back.png"


function Openmail(props) {
  
  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase())
  }

  const navigate = useNavigate()

  const backToMain = async() =>{
    try {
        navigate('/main')
    } catch (error) {
        console.log(error)
    }
}
 

  return (

    <div
      style={{ width: '74vw' }}>

      <div
        style={{ marginLeft: '19.6vw', zIndex: '1', position: 'fixed', backgroundColor: '#F9F9F9', top: '0', width: '75.5vw', height: '5vw' }}>



        <div
          style={{
            marginTop: '0.7vw', marginLeft: "0.5vw", display: "flex", alignItems: "center",
            borderRadius: "40px", backgroundColor: "#E4EFFA", width: "55vw", height: "3.7vw"
          }}>

          <img
          onClick={backToMain}
            src={lens}
            style={{ width: "1.3vw", height: "1.3vw", alignItems: "center", marginLeft: "15px" }} />

          <input
            onChange={searchHandler}
            placeholder='Search mail'
            style={{
              marginLeft: "3vw", height: "3vw", width: "45vw", backgroundColor: "#E4EFFA",
              border: "none", outline: "none", fontSize: '1vw'
            }} />

        </div>

      </div>

      {/* <div style={{ marginLeft: props.isOpen ? '19.6vw' : '5.7vw', width: props.isOpen ? '74vw' : '88vw' }}>

        <div
          style={{ paddingBottom: '1vw', boxShadow: ' 0 -1px 0 0', marginTop: '5vw' }}>
          <img

            src={back}
            style={{ width: '1.2vw', height: '0.9vw', marginLeft: '1.5vw', marginTop: '2vw' }} />
        </div> */}

      {/* <div>
        {data.subject}
      </div> */}
      {/* </div> */}
      </div>
)
}
export default Openmail;