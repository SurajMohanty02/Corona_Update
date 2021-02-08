import React, { useEffect, useState } from 'react';
import {Api} from '../Covid/Api';
const Search = () => {
  
   
    const [search,setsearch]=useState("");
    const InputEvent=(e)=>{
        setsearch(e.target.value)
      //  console.log(search)
    }
    
   
   
    return (
        <section>
        <h1 className="text-center">Search Covid Data Countrywise</h1>
        <div className="text-center m-5">
       Search : &nbsp; <input type="text"
       onChange={InputEvent}
       value={search}
       placeholder="search.."/>
       <br/>
       <Api name={search}/>
       <br/>
       
        
        </div>
       
        </section>
        )

}

export default Search;
