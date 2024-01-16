import { useEffect, useState } from "react";

const EditTodos = ({
    Task, 
    setTask, 
    showEdit, 
    setShowEdit,
    editId}) => {
        const [Taskname, setTaskname] = useState("");
        const [Taskdescription, setTaskdescription] = useState("");
        const [Taskstatus, setTaskstatus] = useState("");

        useEffect(() =>{
            const selectedTodos = Task.filter((doc, idx)=> idx == editId)
            //console.log(selectedTodos);
            setTaskname(selectedTodos[0].TaskName);
            setTaskdescription(selectedTodos[0].TaskDescription);
            setTaskstatus(selectedTodos[0].Status);
        }, [editId])

    const updateTodos = () => {
        const editedTodos = {
            TaskName : Taskname,
            TaskDescription : Taskdescription,
            Status : Taskstatus
        };
        Task[editId] = editedTodos;
        setTask([...Task]);
        setShowEdit(!showEdit);
    }

    return (
        <div>
          
            <div className="TopBar">My Todo</div>
                <div className="add">
                <input
                 type="text"
                  placeholder="Todo Name"
                  value={Taskname}
                  onChange={(e) => setTaskname(e.target.value)}
                  />
                <input
                 type="text"
                  placeholder="Todo Description"
                  value={Taskdescription}
                  onChange={(e) => setTaskdescription(e.target.value)}
                  />
                <button
                 className="addtodo btn btn-secondary"
                 onClick={updateTodos}
                 >Update</button>
            </div>

            <div className="todostatus">
            <h3 className="mytodos">My Todos</h3>
            <h3 className="statusfilter">Status Filter : 
            <div className="all dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 btn-error">All</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-100 h-25">
                    <li><a>All</a></li>   
                    <li><a>Completed</a></li>
                    <li><a>Not Completed</a></li>
                    </ul>
                </div>
            </h3>
            </div>
        </div>
    )
}
 export default EditTodos