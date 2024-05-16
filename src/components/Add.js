import './Add.css';
import { useState } from "react";

const Add = (props) =>{
    const initialformstate = {id:null,task:""};
    const [Todo,setTodo] = useState(initialformstate);
    const HandleInput=(event)=>{
        const {name,value}=event.target
        setTodo({...Todo,[name]:value}
            )
        }


    return(
        <>
        <form onSubmit={
            event=> {
                event.preventDefault();
                if (!Todo.task) return;
                props.adduser(Todo);
                setTodo(initialformstate);
        
        }}>
            <div className="input"><input type="text" className="form-control" name="task" placeholder="Add task" onChange={HandleInput} value={Todo.task}/>
      <button type="submit">ADD</button></div>
    </form>
        </>
    ) 
}
export default Add;