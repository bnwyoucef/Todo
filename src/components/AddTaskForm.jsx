import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useDispatch,useSelector } from 'react-redux';
import { postNewTask,addNewTask } from '../features/todo/todoSlice';

function AddTaskForm() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [taskTitle,setTaskTitle] = useState('');
  const [taskDescription,setTaskDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAddTask() {
    let newTask = {title:taskTitle,description:taskDescription,userId:2}
    dispatch(postNewTask(newTask));
    //dispatch(addNewTask(newTask));
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} 
        style={{backgroundColor:'#FF869E',color:'#A10035',borderColor:'#A10035'}}
      >
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="task title"
                autoFocus
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskForm;
