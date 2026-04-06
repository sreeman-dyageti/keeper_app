import React, { useState, useEffect } from "react";

function Note(props) {

  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content
  });

  // Sync when switching notes
  useEffect(() => {
    setEditedNote({
      title: props.title,
      content: props.content
    });
  }, [props.title, props.content]);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedNote(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="note">

      {props.isEditing ? (
        <>
          <input 
            name="title"
            value={editedNote.title}
            onChange={handleChange}
          />
          <textarea 
            name="content"
            value={editedNote.content}
            onChange={handleChange}
          />

          <button onClick={() => {
            props.onSave(props.id, editedNote);
          }}>
            Save
          </button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>

          <button 
            className="edit-btn"
            onClick={() => props.onEdit(props.id)}
    
          >
          🖊
          </button>

          <button 
            className="delete-btn"
            onClick={() => props.onDelete(props.id)}
          >
            X
          </button>
        </>
      )}

    </div>
  );
}

export default Note;