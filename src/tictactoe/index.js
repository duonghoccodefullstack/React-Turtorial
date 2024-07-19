import { useState } from "react";
import Board from "./board";
import { Winner } from "../helpers";

const TicTacToe = () => {
    const [board,setBoard] = useState(Array(9).fill(null))
    // console.log(board)
    // const test = [
    //     null,null,null,
    //     "X","X","X",
    //     null,null,null]
     
    // console.log(Winner(test))

    const [xIsnext,setXIsNext] = useState(true);
    const winner = Winner(board);
    const handleClick = (index) => {
        // console.log(board)
        const boardCopy = [...board];
        if (winner || boardCopy[index] ) return
        boardCopy[index] = xIsnext ? 'X' : '0';
        // console.onclick(boardCopy)
        setBoard(boardCopy)
        setXIsNext(!xIsnext);
    
}
    return (  
       <div>
            
            <Board cells={board} onclick={handleClick} ></Board>
        
        </div>
    );
}
 
export default TicTacToe;