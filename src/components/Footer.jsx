import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '@mui/material/Button';
import '../styles/footer.css'
import { useSelector } from 'react-redux';


const Footer = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  function todoRatio(list) {
    let finishedTasks = 0;
    for(let task in list) {
      if(list[task].completed) finishedTasks++;
    }
    return (finishedTasks / list.length) *100;
  }

  const ratio = todoRatio(todoList).toString();

  return (
    <div className="footer-container">
        <ProgressBar now={ratio} label={ratio.substring(0,5)+'%'} variant="danger" style={{flex:'3',margin:'10px',backgroundColor:'#FFC4C4'}}/>
        <Button variant="contained" style={{marginRight:'10px',backgroundColor:'#FF869E',color:'#A10035'}}>Clear</Button>
    </div>
  )
}

export default Footer;