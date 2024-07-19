import React from 'react'
import Cell from './cell'

export default function Board(props) {

  return (
    <div className='m-6 w-ttt h-ttt grid grid-cols-3 cursor-pointer'>
        { props.cells.map((item,index) => (
        <Cell
         key= {index}
         value={item}
         onclick={() => props.onclick(index)}
         >
          
        </Cell>  
        ))}
         
          
    </div>
  )
}
