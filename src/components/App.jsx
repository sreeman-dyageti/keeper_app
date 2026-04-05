import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import InputText from "./inputText";

export default function App() {

const [AllNotes, setAllNotes]=useState([]);

function addNote(Input){
  setAllNotes((prev)=>{ return [...prev, Input]});
}

function deleteNote(id){
  setAllNotes((prev)=>{ return prev.filter((item, index)=>{
    return index !== id;
  })})
}

return (
  <div className="app">
    <Header />
    <main>  

    <InputText onAdd={addNote} />

   <div className="notes-container">     
         {AllNotes.map((note, index) => {
          return <Note 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={deleteNote}
          />
        })}
      </div>
    </main>
    <Footer />
  </div>
);
}
