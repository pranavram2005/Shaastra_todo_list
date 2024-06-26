import './List.css';

const List = (props) =>{
    
    return(
        <>
        <div className='tasks'>
                    {props.Users.length>0?(
                        props.Users.map((user)=>(
                            <div className='box' key={user.id}>
                         <div className='work'><div><input type='checkbox' onClick={()=>props.modify(user)}/></div>                                     
                               <div> {(user.status === "Completed")  ? (
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