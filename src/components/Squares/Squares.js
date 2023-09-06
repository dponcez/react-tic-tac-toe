import React from 'react';
import { Button } from '../Button/Button'
import './Squares.css';
const Squares =  ({value, onClick}) => {
  return (
    <Button
      className='btn border'
      value={value}
      onClick={onClick}
    />
  )
}

export { Squares }