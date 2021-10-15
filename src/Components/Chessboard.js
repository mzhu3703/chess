import React from 'react'
import './Chessboard.css'
import Tile from './Tile'

function Chessboard(){

    const horizontalCoord = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const verticalCoord = ["1","2","3","4","5","6","7","8"]

    let board = []
    
    for(let j = verticalCoord.length-1; j >= 0; j--){
        for(let i = 0; i < horizontalCoord.length; i++){
            //if the coordinate is even, dark tile
            //odd coordinate white tile 
            const number = j + i + 2
            board.push(<Tile number = {number}/>)
        }
    }

    return(
        <div id = "Chessboard">
            {board}
        </div>
    )
}

export default Chessboard