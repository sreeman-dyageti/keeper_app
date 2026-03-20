import React from "react";

function note(props){
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}t</p>
    </div>
}

export default note;