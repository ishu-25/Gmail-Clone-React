import React, { useEffect, useState } from 'react';
import lens from "../images/lens.png"
import { Grid } from '@mui/material';

function Openmail(props) {
  
  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase())
  }

 

  return (

    <div 
      style={{ marginLeft: '2.9vw', width: '74vw' }}>

      <div 
        style={{ zIndex: '1', position: 'fixed', backgroundColor: '#F9F9F9', top: '0', width: '75.5vw', height: '5vw' }}>
        
        <Grid item xs={8}>
          
          <div 
            style={{ marginTop: '0.7vw', marginLeft: "0.5vw", display: "flex", alignItems: "center", 
            borderRadius: "40px", backgroundColor: "#E4EFFA", width: "55vw", height: "3.7vw" }}>
            
            <img 
            src={lens} 
            style={{ width: "1.3vw", height: "1.3vw", alignItems: "center", marginLeft: "15px" }} />
            
            <input 
            onChange={searchHandler} 
            placeholder='Search mail' 
            style={{ marginLeft: "3vw", height: "3vw", width: "45vw", backgroundColor: "#E4EFFA", 
            border: "none", outline: "none", fontSize: '1vw' }} />
          
          </div>
        </Grid>
      </div>

      {/* <div>
        {data.subject}
      </div> */}

    </div>
)
}
export default Openmail;