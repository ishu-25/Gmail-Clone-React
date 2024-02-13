import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri';

function Note({ title, content,date,time, onDelete, id, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    onEdit(id, editedTitle, editedContent); 
    setIsEditing(false);
  };

  return (
    <div className='note'>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
        </>
      )}

      <h2>{date}</h2>
      <h2>{time}</h2>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>

      {isEditing ? (
        <button onClick={handleSaveEdit}>
          Save
        </button>
      ) : (
        <button onClick={handleEditToggle}>
          <RiEdit2Line size={25} />
        </button>
      )}
    </div>
  );
}

export default Note;