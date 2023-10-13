import React, { useState } from 'react'
import s from "./style.module.css"

export default function InputApp() {
    const [value,setValue]=useState('');
    const [valueArray,setValueArray]=useState([]);

    const handleValue=(e)=>{
        setValue(e.target.value)
    }

    const handleArray=()=>{
        if(value !== "")
        setValueArray([...valueArray,value])
        setValue("");
    }

    const deleteItem=(index)=>{
        const update = valueArray.filter((_,i)=>i !== index)
        setValueArray(update)
    }

  return (
    <div>
        <div className={s.form}>
        <label>Champ de Tache</label>
            <input type="text" value={value} onChange={handleValue} />
                <button onClick={handleArray}>Ajouter</button>
        </div>
                <div className={s.data}> {valueArray.map((data,index)=>
                    <div className={s.divData} key={index}> <span>tache N° {index}</span>  {data} <button onClick={()=>deleteItem(index)}>Supprimer</button></div>
                )}
                </div>
    </div>
  )
}
