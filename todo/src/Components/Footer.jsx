import styles from './Footer.module.css'
export default function Footer({completedTodos, totalTodos}){
    return(
        <div className={styles.footer}>
            <span className={styles.completed}>Completed Tasks:{completedTodos}</span>
            <span>Total Tasks:{totalTodos}</span>
        </div>
    )
}