import styles from './Button.module.css';

const Button = ({children, clickFunction}) => {
  return (
    <button onClick={clickFunction} className={styles.Button}>{children}</button>
  )
}

export default Button 