import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import InputText from "./inputText";

export default function App() {

const [AllNotes, setAllNotes]=useState([]);

function addNote(Input){
  setAllNotes((prev)=>{ return [...prev, Input]});
}

return (
  <div className="app">
    <Header />
    <main>  

        <InputText onAdd={addNote} />

   <div className="notes-container">     
         {AllNotes.map((note) => {
          return <Note 
          key={note.key}
          title={note.title}
          content={note.content}
          />
        })}
      </div>
    </main>
    <Footer />
  </div>
);
}
