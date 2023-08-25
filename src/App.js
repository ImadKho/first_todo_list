import './App.css';
import deleteBin from "./icones/delete-bin.svg";
import { useState } from 'react';
import Swal from 'sweetalert2';
import {Task} from './Task';

function App() {
  let [title, setTitle] = useState('');
  const getTitle = (event) => {
    setTitle(event.target.value);
  }

  let [time, setTime] = useState('');
  const getTime = (event) => {
    setTime(event.target.value);
  }

  let [taskList, setTaskList] = useState([]);
  const addTask = () => {
    if(title === '' || time === ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill the inputs correctly !',
        confirmButtonColor: '#FF5600',
      })
      return;
    }

    const newTask = {
      id: taskList.length === 0 ? 0 : taskList.length+1,
      title: title,
      time: time,
      done: false,
    }

    let afterAdd = [...taskList, newTask];
    setTaskList(afterAdd);

    //Clear the states values
    setTime('');
    setTitle('');
  }

  const deleteTask = (id) => {
    let afterDelete = taskList.filter((task) => {
      return task.id !== id
    })
    setTaskList(afterDelete);
  }

  const completeTask = (id) => {
    let afterUpdate = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done}; 
      }
      return task;
    });
    setTaskList(afterUpdate)
  }


  return (
    <div className="App">
      <h1 className='main-title'>Today's Tasks</h1>
      <div className='flex-container'>
        <div className='newTask-container'>
          <h4>New task : </h4>
          <div className='input-container'>
            <input onChange={getTitle} value={title} type='text' className="input-task" name="input-task" placeholder='Enter a task'></input>
            <input onChange={getTime} value={time} type="time" className="input-time" name="input-time"></input>
            <button onClick={addTask} className='add-btn'>Add</button>
          </div>
        </div>
        <div className='taskList-container'>
          {taskList.map((task) => (
            <Task task={task} completeTask={() => completeTask(task.id)} deleteTask={() => deleteTask(task.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
