import React,{useState} from 'react'
import './Tile.css'
import Circle from './Circle'
function Tile(props){

const  {displayKnightMove , handleClick, number, xCoord, yCoord, clickedTile} = props 



const ownHandleClick = () =>{
    handleClick(xCoord, yCoord)
}

    if(props.number % 2 === 0){
        return(
            <div onClick = {ownHandleClick} className = "tile black-tile">
              {clickedTile || displayKnightMove ? <Circle color = {displayKnightMove}  /> : null}
            </div>
        )
    }
    else{
        return(
            <div onClick = {ownHandleClick} className = "tile white-tile">
                {clickedTile || displayKnightMove ? <Circle color = {displayKnightMove}/> : null}
            </div>
        )
    }
  
}

//Don't have a circle and setCircle state in the tile
//Tile will only have clickedTile as a prop and that will determine whether or not a circle will appear
//instead of having a onclickw will determine whether or not a circle appears
//what will determine whether or not a circle appears is the state in our chessboard
//when we click we will change to current coordinates and whether or not the state is equal to our current coordinates will determine 
//if a circle will appear

export default Tile
