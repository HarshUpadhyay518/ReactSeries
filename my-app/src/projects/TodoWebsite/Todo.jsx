import { useState } from 'react';
import './Todo.css';
// eslint-disable-next-line no-unused-vars
// import { MdCheck , MdDeleteForever} from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { DateTime } from './DateTime';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';


export const Todo = () =>{
    const [task,setTask] = useState(() => getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const {id,content,checked} = inputValue;

        //To check if the input is empty or not  
        if(!content) return;
        // To check if the data is alreadt existing or not
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);

        if(ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, {id,content,checked}]);
    };

    setLocalStorageTodoData(task);
    


    const handleDeleteTodo = (value) =>{

        const updatedTask = task.filter((currTask) => currTask.content != value);
        setTask(updatedTask);
    };
    
    const handleTodoData = () => {
        setTask([]);
    };

    const handleCheckedTodo = (content) =>{
        const updatedTask1 = task.map((currTask) =>{
            if(currTask.content === content){
                return {...currTask,checked:!currTask.checked};
            }else{
                return currTask;
            }
        })
        setTask(updatedTask1);
    };

    return(
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <DateTime/>
            </header>

            <TodoForm  onAddTodo = {handleFormSubmit}/>

            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask) =>{
                            return (
                                <TodoList 
                                 key={currTask.id} 
                                 data={currTask.content}
                                 checked = {currTask.checked}
                                 onHandleDelete = {handleDeleteTodo}
                                 onHandleCheckedTodo = {handleCheckedTodo}
                                />
                            )
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