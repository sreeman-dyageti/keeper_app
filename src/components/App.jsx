import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import InputText from "./inputText";

export default function App() {

  const [AllNotes, setAllNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function addNote(Input) {
    setAllNotes((prev) => [...prev, Input]);
  }

  function deleteNote(id) {
    setAllNotes((prev) => prev.filter((_, index) => index !== id));
  }

  function editNote(id) {
    setEditingId(id);
  }

  function saveEdit(id, updatedNote) {
    setAllNotes((prev) =>
      prev.map((note, index) =>
        index === id ? updatedNote : note
      )
    );
    setEditingId(null);
  }

  return (
    <div className="app">
      <Header />
      <main>  

        <InputText onAdd={addNote} />

        <div className="notes-container">     
          {AllNotes.map((note, index) => {
            return (
              <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
                onEdit={editNote}
                onSave={saveEdit}
                isEditing={editingId === index}
              />
            );
          })}
        </div>

      </main>
      <Footer />
    </div>
  );
}