import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/card.css';

import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/todo/todoSlice';


const TodoCard = ({ todoItem }) => {
  const dispatch = useDispatch();

  function handleRemove() {
    let obj = {id: todoItem.id};
    dispatch(deleteTask(obj));
  }
  return (
    <div className="card">
        <CloseIcon  className="closeIcon" onClick={handleRemove}/>   
        <h2>{todoItem.title}</h2>
        <p>{todoItem.description}</p>
        <p>{todoItem.completed?'true':'false'}</p>
    </div>
  )
}

export default TodoCard
