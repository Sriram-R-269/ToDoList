import { useState } from 'react';

import Topbar from './topbar';
import EditTodos from './edit';


export default function Bottombar() {
  const data = [
    {
      TaskName : "office Task 1",
      TaskDescription:"This is the description for my first task",
      Status : "Not Completed",
    },

    {
      TaskName : "office Task 2",
      TaskDescription:"This is the description for my second task",
      Status : "Not Completed",
    },

    {
      TaskName : "office Task 3",
      TaskDescription:"This is the description for my third task",
      Status : "Not Completed",
    },

    {
      TaskName : "office Task 4",
      TaskDescription:"This is the description for my forth task",
      Status : "Not Completed",
    },
  ];

  const [Task, setTask] = useState(data);
  const [showEdit, setShowEdit] = useState(true);
  const [editId, seteditId] = useState("");

  const deleteTodos = (id)=> {
    const remainingTOdos = Task.filter((datainfo,idx)=> idx !== id);
      //console.log(remainingTOdos);
      setTask(remainingTOdos);
  };

  const handleEdit = (id) => {
    setShowEdit(false);
    seteditId(id);
  }


    return (
    <div className="ToDotasks">
      {showEdit === true ?(
      <Topbar Task ={Task} setTask ={setTask} />
      ) :(
      <EditTodos 
      Task ={Task} 
      setTask ={setTask} 
      showEdit ={showEdit}
      setShowEdit ={setShowEdit}
      editId ={editId}
      />
      )}
      
    <div className='cardTask'>
      {Task && (
        <>
        {Task?.map((datainfo, idx)=>( 
        <div 
          key= {idx}  
          className="card card-compact w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Name : {datainfo.TaskName}</h2>
            <p>Description :{datainfo.TaskDescription}</p>
            <p>Status : <select className="select select-bordered select-sm bg-error w-36 max-w-xs">
                            {datainfo.Status == "Completed" ? (
                              <option className="bg-accent">Completed</option>
                            ) : (
                              <option className="bg-error">Not Completed</option>
                            )}
                            {datainfo.Status == "Not Completed" ? (
                              <option className="bg-accent">Completed</option>
                            ) : (
                              <option className="bg-error">Not Completed</option>
                            )}
                        </select>
            </p>
            <div className="card-actions justify-end">
                <button className="btn btn-accent"
                onClick={() => handleEdit(idx)}>
                  Edit
                </button>
                <button
                 className="btn btn-error"
                 onClick={() => deleteTodos(idx)}>
                  Delete</button>
            </div>
        </div>
     </div>
     ))}
 
        </>
      )}
        
    </div>
    </div>
    )

}

