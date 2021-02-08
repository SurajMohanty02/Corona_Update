import React from 'react'

const Result = (props) => {
    const imgsrc=`https://source.unsplash.com/300x300/?${props.name}`;
    return (
        <div className="text-center">
        <br/>
          <img src={imgsrc}/>  
          
        </div>
    )
}

export default Result
