import React from 'react'
import './Circle.css'

function Circle(props){

    if(props.color === true){
        return(
            <div className = 'circle-knight'>
    
            </div>
        )
    }
    else{
        return(
            <div className = 'circle'>
    
            </div>
        )
    }
    
}

export default Circle