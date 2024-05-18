import './App.css';
import React,{useState} from 'react';
import Add from './components/Add';
import List from './components/List';
import Edit from './components/Edit';

function App() {
  const [Users,setUsers] = useState([ 
    {id:1,task:"Submit Assignments",status:"Pending"},
    {id:2,task:"Have Lunch",status:"Pending"},
    {id:3,task:"Play Badminton",status:"Pending"}
])
const initialeditstate={id:null,task:"",status:"Pending"};
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
  setCurrentuser({id:user.id,task:user.task,status:user.status})}
  const updateuser=(id,updateduser)=>{  setedit(false);
  setUsers(Users.map((user)=>(user.id===id?updateduser:user)))
}

const modify = (user) =>{
  if (user.status==="Pending"){
    setUsers(Users.map((users)=>{
      if (users.id === user.id) {
        return {...users, status:"Completed" };
        } else {
        return users;
        } 
    }))
  }else if (user.status==="Completed"){
    setUsers(Users.map((users)=>{
      if (users.id === user.id) {
        return {...users, status:"Pending" };
        } else {
        return users;
        } 
    }))
  }
}

  return (
    <div className="App">
      <div className='head'><h1>TODO LIST</h1></div>
      <div className='todo'>
        <div className='add'>
          {edit?(<div><Edit updateuser={updateuser} editing={editing} currentuser={currentuser} /></div>):(<div><Add adduser={adduser}/></div>)}
          </div>
        <div className='list'><List editing={editing} deleteuser={deleteuser} Users={Users} modify={modify}/></div>
      </div>
    </div>
  );
}

export default App;
