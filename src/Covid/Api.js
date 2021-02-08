
import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Api = (props) => {
    const [result,setresult]=useState();
    let data="";
    //console.log(props.name)
   
    const url=`https://coronavirus-19-api.herokuapp.com/countries/${props.name}`; 
    const search=async ()=>{
     data=await axios.get(url);
    setresult(data);
   console.log(data);
    
    }
    search();
   // console.log(result);

    return (
            <div className="text-center">
            </div>
            
        );
    }

