import { useEffect, useState } from 'react';
import './Todo.css';
// eslint-disable-next-line no-unused-vars
import { MdCheck , MdDeleteForever} from "react-icons/md";

export const Todo = () =>{
    const [inputValue,setInputValue] = useState(" ");

    const [task,setTask] = useState([]);

    const [dateTime,setDateTime] = useState("");

    const handleInputChange = (value) =>{
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    };

    // todo date and time
    useEffect(() =>{
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
        },1000);
        return () => clearInterval(interval);
    });

    const handleDeleteTodo = (value) =>{
        console.log(value);
        
        const updatedTask = task.filter((currTask) => currTask != value);
        setTask(updatedTask);
    };

    const handleTodoData = () => {
        setTask([]);
    };
    
    return(
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime}</h2>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off'  value={inputValue} onChange={(event => handleInputChange(event.target.value))}/>
                    </div>
                    <div>
                        <button className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>

            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask,index) =>{
                            return <li key={index} className='todo-item'>
                                <span>{currTask}</span>
                                <button className='check-btn'><MdCheck/></button>
                                <button className='delete-btn' onClick={() => handleDeleteTodo(currTask)}><MdDeleteForever/></button>
                            </li>
                        })
                    }
                </ul>
            </section>

            <section>
                <button className='clear-btn' onClick={handleTodoData}>Clear All</button>
            </section>
        </section>
    )
}