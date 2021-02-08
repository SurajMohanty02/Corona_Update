import React, { useState } from 'react';
import Result from './Result';

const Searchthing = () => {
    const [img,setimg]=useState("");
    const InputEvent=(e)=>{
        setimg(e.target.value);
        console.log(img)
    }
    return (
        <section>
        <div className="text-center m-5">
           Search Anything: &nbsp; <input type="text"
           onChange={InputEvent}  value={img}
           placeholder="search..."/>
           <br/>
        </div>
        <Result name={img}/>
        
        </section>
    )
}

export default Searchthing
