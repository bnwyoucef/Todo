import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/card.css';


const TodoCard = ({ todoItem }) => {
  return (
    <div className="card">
        <CloseIcon  className="closeIcon"/>   
        <h2>{todoItem.title}</h2>
        <p>{todoItem.description}</p>
    </div>
  )
}

export default TodoCard
