import styles from './TodoItem.module.css'
export default function todoItem({item, todos, setTodos}){
    function handleDeleteButton(name){
        setTodos(todos.filter((todo)=> todo.name !== name))
    }
    function handleClick(name){
        const newArray = todos.map((todo)=>todo.name === name ? {...todo,done:!todo.done} : todo)
        setTodos(newArray)
    }
    const className = item.done ? styles.completed : ""
    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={className}  onClick={()=>handleClick(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => handleDeleteButton(item.name)} className={styles.deleteButton}>X</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}