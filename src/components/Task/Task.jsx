import styles from './Task.module.css'
import {CgClose, CgInfo, CgCheckO} from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div className={styles.taskContainer} style={task.completed ? {borderLeft: "6px solid chartreuse", textDecoration: "line-through"} : {}}>

      {/* <CgCheckO /> */}

      <div className={styles.taskTitle} onClick={() => handleTaskClick(task.id)}>
        {task.title}
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