import styles from './Form.module.css'
import { useState } from "react"
export default function Form({todos,setTodos}){
    const [todo, setTodo] = useState({name : "", done : false})
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name : "", done : false});
    }
    return(
        <div>
            <form className={styles.todoForm} onSubmit={handleSubmit}>
                <input className={styles.todoInput} onChange={(e)=>setTodo({name:e.target.value, done:false})} value={todo.name} type="text" placeholder='Enter a task'/>
                <button className= {styles.todoSubmit}>ADD</button>
            </form>
        </div>
    )
}