import React, { useState } from "react";

export function Input(){

const [input,setInput]=useState('');
const [inputValue,setInputValue]=useState([]);

const handleInput=(e)=>{
    setInput(e.target.value)
}

const handleInputValue=()=>{
    if(input !== ""){
        setInputValue([...inputValue,input])
        setInput("")
    }
}



 return(
    <div>
        <input type="text" value={input} onChange={handleInput} />

            <button onClick={handleInputValue}>Ajouter</button>

            {inputValue.map((data,index)=>
              <div key={index}>{data}</div>
            )}
    </div>
 )
}