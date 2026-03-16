import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Note />
      </main>
      <Footer />
    </div>
  );
}
