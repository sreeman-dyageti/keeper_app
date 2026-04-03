import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "./notes";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>  
       {notes.map((note) => {
            return <Note 
            key={note.key}
            title={note.title}
            content={note.content}
            />
          })} 
      </main>
      <Footer />
    </div>
  );
}
