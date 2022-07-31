import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos } from './todoSlice';
import TodoCard from '../../components/TodoCard';
import './todoList.css';

const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();
    const status = useSelector(state => state.todo.status);

    useEffect(() => {
      if(status === 'idle') {
        dispatch(fetchTodos());
      }
    },[dispatch,status]);

  return (
      <div className="card-container">
        {todoList?.map((todo) => (
          <div key={todo.id}>
            <TodoCard todoItem={todo} />
          </div>
        ))}
      </div>
  )
}

export default TodoList;



