import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store'
import {addTodo,deleteData,doComplete} from './todoSlice';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);
  const [newTask,setTask] = useState("");
  const addTask = ()=> {
    dispatch(addTodo(newTask));
    setTask("");
  }
  return (
    <div>
        <div>
          <input name='taskname' value={newTask} onChange={(e)=>setTask(e.target.value)}/>
          <button onClick={()=>addTask()}>Add New</button>
        </div>
        <table border={1}>
          <tbody>
            <tr>
              <th>
                Task Name
              </th>
              <th>
                Status
              </th>
              <th>Actions</th>
            </tr>
          {
          selector.todoData?.map((ele)=>{
            return (
                <tr key={ele.id}>
                  <td>{ele.task}</td>
                  <td>{ele.isDone ? 'Completed' : 'Pending'}</td>
                  <td>
                    <button onClick={()=>dispatch(deleteData(ele.id))}>Delete</button>
                    <button onClick={()=>dispatch(doComplete(ele.id))}>Complete</button>
                    </td>
                  
                </tr>
            )
          })
        }
        </tbody>
        </table>
    </div>
  );
}

export default App;
