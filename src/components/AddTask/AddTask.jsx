import { useState } from 'react';
import styles from './AddTask.module.css';

import Button from '../Button/Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setinputData] = useState('');

  const handleInputChange = (e) => {
    setinputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData.trim());
    setinputData('');
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      handleAddTaskClick()
    }
  })

  return (
    <div className={styles.addTaskContainer}>
      <input
      type="text"
      placeholder="Insira aqui sua nova tarefa..."
      value={inputData}
      onChange={handleInputChange}
      className={styles.addTaskInput}/>
      <div className={styles.addButtonContainer}>
        <Button clickFunction={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask;