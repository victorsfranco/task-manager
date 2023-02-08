import styles from './Task.module.css'
import {CgClose, CgInfo, CgCheckO, CgCheckR} from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div className={styles.taskContainer} style={task.completed ? {textDecoration: "line-through"} : {}}>


      <div className={styles.taskTitle} onClick={() => handleTaskClick(task.id)}>
        <CgCheckR className={styles.checkIcon} style={task.completed ? {opacity: "1", transition: "0.2s"} : {opacity: "0", transition: "0.2s" }}/>
        <p>{task.title}</p>  
      </div>

      <div className={styles.buttonsContainer}>

        <button className={styles.taskButtons} onClick={handleTaskDetailsClick }>
          <CgInfo />
        </button>

        <button className={styles.taskButtons} onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>

      </div>
    </div>
  )
}

export default Task