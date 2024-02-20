import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';




export default function Navbar(props) {

    
    return (
        
            <Box sx={{ flexGrow: 1 }}>
                <AppBar elevation={0} position="static" sx={{top: "0", zIndex: "2", backgroundColor: "#F9F9F9", minHeight: "5vw", minWidth: "0vw", paddingTop: "7px", paddingRight: "40px",paddingLeft:'19.5vw'  }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        
                       
                        
                    </div>
                </AppBar>
            </Box>
        
    );
}