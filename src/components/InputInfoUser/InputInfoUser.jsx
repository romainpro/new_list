import React, { useState } from "react";
import s from "./style.module.css"

export function InputInfoUser(){
    
    const [value,setValue]=useState('');
    const [inputValue,setInputValue]=useState([])

    const handleValue=(e)=>{
        setValue(e.target.value)
    }
    const handleInput=()=>{
        if(value !== ""){
        setInputValue([...inputValue,value])
        setValue("")
    }
    }
    const deleteItem=(index)=>{
        const updateValue =inputValue.filter((_,i)=>i !== index);
            setInputValue(updateValue)
    }

    return(
        <div className={s.container}>
            <label>tache a ajouter</label>
            <input type="text" value={value} onChange={handleValue}/>
                <button onClick={handleInput}>AJouter</button>

                {inputValue.map((data,index)=>
                    <div className={s.liste} key={index}>
                        <div> tache n°{index} pour {data}</div>  <button onClick={()=>deleteItem(index)}>delete</button>
                    </div> )}
        </div>
    )
}