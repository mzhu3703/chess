import React,{useState} from 'react'
import './Chessboard.css'
import Tile from './Tile'

function Chessboard(){

    const  [coord, setCoord] = useState({x: -1, y: -1})
    const [knight, setKnight] = useState([])

    const horizontalCoord = [1, 2, 3, 4, 5, 6, 7, 8]
    const verticalCoord = [1, 2, 3, 4, 5, 6, 7, 8]

    const handleClick = (xCoord , yCoord) => {
        let newCoord = {x: xCoord, y: yCoord}
        setCoord(newCoord)
        knightMoves(newCoord)
    }

    const selectPiece = (currentX , currentY) => {
        //determine whether or not the coordinates are equal to the coordinates I set 
        const {x, y} = coord;
       
        if( x === currentX && y === currentY){
            return true;
        }else{
            return false;
        }
    }


    const knightMoves = (newCoord) => {
        let x = newCoord.x;
        let y = newCoord.y;
        let moves = [];
        //valid knight moves
        //up 2, one left, one right
        moves.push({y: y+2, x : x+1 })
        moves.push({y: y+2, x : x-1 })
        //up 1, 2 left, 2 right
        moves.push({y: y+1, x : x+2 })
        moves.push({y: y+1, x : x-2 })
        //down 1, 2 left, 2 right
        moves.push({y: y-1, x : x+2 })
        moves.push({y: y-1, x : x-2 })
        //down 2, one left, one right
        moves.push({y: y-2, x : x+1 })
        moves.push({y: y-2, x : x-1 })
        
        setKnight(moves)
        //calculate knight moves when I click on a tile
        //whenever I click on a tile, the handleclick function of the chessboard is called
        //handleClick of the chessboard is where I will calculate the knightmoves
        //valid knight moves will be a list of coordinate objects, x and y 
        //state of knightmoves is a list
        //Dont want to pass down the entire list state into each tile 
        //if both of the coordinate is valid, aka within the bounds of the chessboard
        //pass a boolean value to the tile as a prop, this prop will display a circle 
        //prop validKnightMove

    }

    const validKnightMove = (currentX, currentY) => {
        let result = false;
        knight.forEach((element) => {
            
            if( element.x === currentX && element.y === currentY){
                result = true;
            }
        })
        return result

    }
    let board = []
    
    for(let j = verticalCoord.length-1; j >= 0; j--){
        for(let i = 0; i < horizontalCoord.length; i++){
            //if the coordinate is even, dark tile
            //odd coordinate white tile 
            const number = j + i + 2
            board.push(<Tile displayKnightMove = {validKnightMove(verticalCoord[i], horizontalCoord[j])} clickedTile = {selectPiece(verticalCoord[i], horizontalCoord[j])} handleClick = {handleClick} number = {number} xCoord = {verticalCoord[i] } yCoord = {horizontalCoord[j]}/>)
        }
    }

    return(
        <div id = "Chessboard">
            {board}
        </div>
    )
}

//coordinate state in chessboard
//whenever you click on a tile you change the coordinate in the chessboard
//within the tile itself, display circle state
//this state will control whether or not a circle is displayed
//when we click on a coordinate/tile, that state will be inversed 
//if the vertical and horizontal coordinates are equal to the coordinates you set, pass clickedTile prop 
//if this clickedTile prop is true, display circle state will be true 

export default Chessboard