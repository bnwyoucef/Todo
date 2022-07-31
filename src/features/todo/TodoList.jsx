import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import TodoCard from '../../components/TodoCard';
import './todoList.css';

const TodoList = () => {
    const todoList = useSelector(state => state.todo)

  return (
      <div className="card-container">
        {todoList.map((todo) => (
          <div key={todo.id}>
            <TodoCard todoItem={todo} />
          </div>
        ))}
      </div>
  )
}

export default TodoList;



