import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos } from './todoSlice';
import TodoCard from '../../components/TodoCard';
import './todoList.css';

const TodoList = ({ searchValue }) => {
    const todoList = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();
    const status = useSelector(state => state.todo.status);
    const [todoListSearch,setTodoListSearch] = useState([]);

    useEffect(() => {
      if(status === 'idle') {
        dispatch(fetchTodos());
      }
    },[dispatch,status]);

    useEffect(() => setTodoListSearch([...todoList]),[todoList])
    useEffect(() =>{
      if(!searchValue.includes('  ')){
        let result = todoList.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));
        setTodoListSearch(result);
      }
    },[searchValue])

  return (
      <div className="card-container">
        {status === 'loading' && <h3>Loading...</h3>}
        {status === 'succeeded' && todoListSearch.length > 0?todoListSearch.map((todo) => (
          <div key={todo.id}>
            <TodoCard todoItem={todo} />
          </div>
        )):
        <h3>There's no tasks to display!</h3>}
      </div>
  )
}

export default TodoList;



