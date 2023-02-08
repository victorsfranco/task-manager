import styles from './initialNotification.module.css'

const initialNotification = ({currentTasks}) => {
  if (currentTasks === 0) {
    return (
      <div className={styles.NotificationContainer}>
        <p className={styles.notificationText}>Insira sua primeira tarefa...</p>
      </div>
    );
  }
}

export default initialNotification;