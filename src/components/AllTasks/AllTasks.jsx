import Task from '../Task/Task';
import styles from './AllTasks.module.css';

const AllTasks = ({allTasks, handleTaskClick, handleTaskDeletion}) => {
  return (
    <div>
      {allTasks.map((i) => (

        <Task
          key={i.id}
          task={i}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />

      ))} 
    </div>
  );

}

export default AllTasks;