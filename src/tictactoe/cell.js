import React from 'react'

export default function Cell(props ) {
  const {value,onClick} = props
  // console.log(props)
  return (
    <div className='border-solid border border-gray-500' 
    onClick={props.onClick}>
     {props.value}
    </div>
  )
}
