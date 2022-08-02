import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '@mui/material/Button';
import '../styles/footer.css'
import { useSelector,useDispatch } from 'react-redux';
import { clearTodo } from '../features/todo/todoSlice';


const Footer = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  function todoRatio(list) {
    let finishedTasks = 0;
    for(let task in list) {
      if(list[task].completed) finishedTasks++;
    }
    return (finishedTasks / list.length) *100;
  }

  const ratio = todoRatio(todoList).toString();

  function clearAll(){
    dispatch(clearTodo());
  }

  return (
    <div className="footer-container">
        <ProgressBar now={ratio} label={ratio.substring(0,5)+'%'} variant="danger" style={{flex:'3',margin:'10px',backgroundColor:'#FFC4C4'}}/>
        <Button variant="contained" style={{marginRight:'10px',backgroundColor:'#FF869E',color:'#A10035'}}
          onClick={clearAll}
        >
          Clear
        </Button>
    </div>
  )
}

export default Footer;