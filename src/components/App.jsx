import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

export default function App() {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  const [AllNotes, setAllNotes]=useState([]);

function handleInput(e){
  const {name, value}= e.target;
  setNote((prev)=>{
  return {...prev, [name]:value}
  })
  console.log(input);
  
}
function addNote(){
  setAllNotes((prev)=>{ return [...prev, note]});
  console.log(note);
}

return (
  <div className="app">
    <Header />
    <main>  
      {AllNotes.map((note) => {
          return <Note 
          key={note.key}
          title={note.title}
          content={note.content}
          />
        })} 

        <div className="note">
          <input onChange={handleInput} type="text" name="title" placeholder="title" value={note.title}/>
          <input onChange={handleInput} type="text" name="content" placeholder="content" value={note.content} />
          <button onClick={addNote}>Add Me</button>
        </div>
    </main>
    <Footer />
  </div>
);
}
