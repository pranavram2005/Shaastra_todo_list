import './App.css';
import React,{useState} from 'react';
import Add from './components/Add';
import List from './components/List';
import Edit from './components/Edit';

function App() {
  const [Users,setUsers] = useState([ 
    {id:1,task:"Submit Assignments"},
    {id:2,task:"Have Lunch"},
    {id:3,task:"Play Badminton"}
])
const initialeditstate={id:null,task:""};
const [currentuser,setCurrentuser]=useState(initialeditstate);
const [edit,setedit] = useState(false)

const adduser = (user)=>{
   user.id=Users.length+1;
   setUsers([...Users,user]);
 } 
 
const deleteuser = (id) =>{
 setUsers(Users.filter((user)=>user.id!==id));
}

const editing = (user)=>{   
  setedit(true);
  setCurrentuser({id:user.id,task:user.task})}
  const updateuser=(id,updateduser)=>{  setedit(false);
  setUsers(Users.map((user)=>(user.id===id?updateduser:user)))
}

  return (
    <div className="App">
      <div className='head'><h1>TODO LIST</h1></div>
      <div className='todo'>
        <div className='add'>
          {edit?(<div><Edit updateuser={updateuser} editing={editing} currentuser={currentuser} /></div>):(<div><Add adduser={adduser}/></div>)}
          </div>
        <div className='list'><List editing={editing} deleteuser={deleteuser} Users={Users}/></div>
      </div>
    </div>
  );
}

export default App;
