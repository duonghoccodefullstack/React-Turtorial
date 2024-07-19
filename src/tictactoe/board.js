import React from 'react'
import Cell from './cell'

export default function Board() {
  return (
    <div className='m-6 w-ttt h-ttt grid grid-cols-3'>
    
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
    </div>
  )
}
