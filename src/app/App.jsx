import { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Uncommet line below to consume API data (line 17)
// import axios from 'axios';

import styles  from './App.module.css'

import AllTasks from '../components/AllTasks/AllTasks';
import AddTask from '../components/AddTask/AddTask';
import Header from '../components/Header/Header';
import TaskDetails from '../components/TaskDetails/TaskDetails';

function App() {
  const [currentTasks, setCurrentTasks] = useState([]);

  // Code lines below can be used to consume data form a API to show some ficticious task:

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=5')
  //     const data = await response.data;
  //     setCurrentTasks(data)
  //   }

  //   fetchTasks();
    
  // }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = currentTasks.map((i) => {
      console.log(i);
      if (i.id === taskId) {
        return {...i, completed: !i.completed};
      } else {
        return i;
      }
    }) 
    
    setCurrentTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...currentTasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      },
    ];

    if (taskTitle != '') {
      setCurrentTasks(newTasks);
    }
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = currentTasks.filter((i) => i.id != taskId)
    
    setCurrentTasks(newTasks);
  }

  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              < AllTasks allTasks={currentTasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}
        />

        <Route
          path="/:taskTitle"
          exact
          component={TaskDetails}
        />
      </div>
    </Router>
  )
}

export default App
