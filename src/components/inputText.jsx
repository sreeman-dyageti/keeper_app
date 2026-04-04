import React, {useState} from "react";

function InputText(props){

const [Input, setInput] = useState({
title:"",
content:""
});


function handleInput(e){
  const {name, value}= e.target;
  setInput((prev)=>{
  return {...prev, [name]:value}
  })
  
}
    return( <div className="form">
           <input onChange={handleInput} type="text" name="title" placeholder="title" value={Input.title}/>
           <p className="content"><input onChange={handleInput} type="text" name="content" placeholder="content" value={Input.content} /></p>
          
          <button onClick={()=>{
            props.onAdd(Input);
            setInput({
             title:"",
             content:"" });

          }}>Add Me</button>
        </div> )
}

export default InputText;