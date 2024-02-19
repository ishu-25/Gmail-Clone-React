import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import keep from '../Keep/keep.png'
import CreateArea from './CreateArea';
import moment from 'moment';
import Note from './Note';
import './keep.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '91%',
    transform: 'translate(-50%, -50%)',
    width: '20vw',
    height: '50vh', 
    overflowY: 'auto', 
    minHeight: '650px',
    bgcolor: 'background.paper',
    padding: '2vw'
};

export default function Keep(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Notes'));
        if (data) {
            setNotes(data);
        }
    }, []);

    function addNote(newNote) {
        const currentDate = moment();
        const formattedDate = currentDate.format('Do MMMM  YYYY');
        const formattedTime = currentDate.format('h:mm a');

        newNote = { ...newNote, date: formattedDate, time: formattedTime };
        setNotes(prevValue => {
            const updatedNotes = [...prevValue, newNote];
            localStorage.setItem('Notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        })
        alert("keep added successfully!");
    }

    function deleteNotes(id) {
        setNotes(prevValue => {
            const updatedNotes = [...prevValue.filter((note, index) => index !== id)];
            localStorage.setItem('Notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        })
    }

    function editHandler(id, updatedTitle, updatedContent) {
        setNotes((prevValue) => {
            const updatedNotes = prevValue.map((note, index) =>
                index === id ? { ...note, title: updatedTitle, content: updatedContent } : note
            );
            localStorage.setItem('Notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        })
        setEditToggle(null);
    }


    return (
        <div>
            <img onClick={handleOpen} src={keep} style={{ cursor: "pointer", width: '1.4vw', paddingTop: '2vw' }} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ paddingTop: '3vw', fontSize: '1vw', color: 'grey' }}>
                        Add Keep
                    </Typography>
                    <CreateArea onAdd={addNote} />
                    {notes.map((note, index) => (
                        editToggle == note.id ? (
                            <Note
                                key={index}
                                id={index}
                                title={note.title}
                                content={note.content}
                                date={note.date}
                                time={note.time}
                                onDelete={deleteNotes}
                                onEdit={editHandler}
                            />) : null
                    ))}
                </Box>
            </Modal>
        </div>
    );
}     