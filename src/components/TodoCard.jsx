import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles/card.css';

import { useDispatch } from 'react-redux';
import { deleteTask,taskDoneUpdate } from '../features/todo/todoSlice';


const TodoCard = ({ todoItem }) => {
  const dispatch = useDispatch();

  function handleRemove() {
    let obj = {id: todoItem.id};
    dispatch(deleteTask(obj));
  }

  function handleComplete() {
    let todo = {...todoItem};
    todo.completed = !todoItem.completed;
    dispatch(taskDoneUpdate(todo));
  }
  const completed = todoItem.completed;

  return (
    <div className="card">
        <CloseIcon  className="closeIcon" onClick={handleRemove}/>   
        <h2 style={{textDecoration:completed ?'line-through':'none'}}>{todoItem.title}</h2>
        <p>{todoItem.description}</p>
        <p>{todoItem.completed?'true':'nooo'}</p>
        <Button variant="contained" id="doneBtn" 
          startIcon={completed?<CheckCircleIcon />:<CheckCircleOutlineIcon />}
          onClick={handleComplete}
        >
          {completed ? 'Done':'Yet'}
        </Button>
    </div>
  )
}

export default TodoCard
