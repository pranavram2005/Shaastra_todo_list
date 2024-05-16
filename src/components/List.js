import './List.css';
import React,{useState} from 'react';

const List = (props) =>{
    const [Id,Setid] = useState(null)
    const [Status,Setstatus] = useState("Pending")
    const modify = (user) =>{
        Setid(user.id)
        if (Status==="Pending"){
            Setstatus("Completed")
        }else{
            Setstatus("Pending")
        }
    }
    return(
        <>
        <div className='tasks'>
                    {props.Users.length>0?(
                        props.Users.map((user)=>(
                            <div className='box' key={user.id}>
                         <div className='work'><div><input type='checkbox' onClick={()=>modify(user)}/></div>                                     
                               <div> {(Status === "Completed" && Id===user.id)  ? (
                                        <p className='usertask'>{user.task}</p>
                                      ) : (
                                        <p>{user.task}</p>
                                      )}</div></div>
                         <div className='buttons'><div><button type="button" onClick={()=>props.editing(user)}><i class="fa fa-pencil"></i></button></div> 
                         <div><button type="button" onClick={()=>props.deleteuser(user.id)}><i class="fa fa-trash-o"></i></button></div></div>
                            </div>
                        ))
                    ):(
                        <div><img src='nodata.png' alt='no-data'/></div>
                    )}
                </div>
        </>
    )
}
export default List;