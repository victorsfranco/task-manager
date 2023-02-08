import { useHistory, useParams } from 'react-router-dom';
import styles from './TaskDetails.module.css';

import Button from '../Button/Button';

const TaskDetails = () => {

  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return (
    <>
    <div className={styles.buttonContainer}>
      <Button clickFunction={handleBackButtonClick}>Voltar</Button>
    </div>
    <div className={styles.infoContainer}>
      <h3 className={styles.title}>{params.taskTitle}</h3>
      <p className={styles.details}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus porro reprehenderit consequuntur repudiandae repellendus fugiat?</p>
    </div>
    </>
  )
}

export default TaskDetails;