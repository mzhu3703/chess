import React,{useState} from 'react'
import './Tile.css'
import Circle from './Circle'
function Tile(props){

const [click, setClick] = useState(false)

const handleClick = () =>{
    let rev = !click
    console.log("I've been clicked")
    setClick(rev)
}

    if(props.number % 2 === 0){
        return(
            <div onClick = {handleClick} className = "tile black-tile">
              {click ? <Circle/> : null}
            </div>
        )
    }
    else{
        return(
            <div onClick = {handleClick} className = "tile white-tile">
                {click ? <Circle/> : null}
            </div>
        )
    }
  
}

export default Tile
