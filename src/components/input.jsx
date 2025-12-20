import { useState, useEffect} from "react"
import addIcon from "../assets/addIcon.svg"
import deleteIcon from "../assets/deleteIcon.svg"

function Input(){
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim()){
            setTodos([...todos, task]);
            setTask("");
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("ToDos"));
        if (storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("ToDos", JSON.stringify(todos));
    }, [todos]);

    return(
        <>
        <form onSubmit={handleSubmit} className="relative w-[50%] border-[#BDE0FE] border-b-4 flex items-center">
            <input onChange={handleChange} value={task} className="bg-[#BDE0FE] m-4  w-full h-[57px] indent-4 rounded-3xl placeholder:text-black" type="text" placeholder="Type some task you have to do" />
            <button className="bg-[#CDB4DB] p-3 rounded-full absolute right-6 top-[50%] translate-y-[-50%]" type="submit"><img src={ addIcon } alt="" /></button>
        </form>
        <ul className="flex flex-col w-[50%] p-3">
        {todos.map((todo, index) => (
            <li className=" relative bg-[#BDE0FE] mt-2 w-full h-[57px] indent-4 rounded-3xl flex items-center" key={index}> {todo}
            <button className="bg-[#CDB4DB] p-3 rounded-full absolute right-3 top-[50%] translate-y-[-50%]" onClick={() => handleDeleteTodo(index)}><img src={ deleteIcon } alt="" /></button>
            </li>
        ))}
        </ul>
        </>
    )


}

export default Input