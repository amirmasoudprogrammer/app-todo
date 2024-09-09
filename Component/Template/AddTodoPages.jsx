import React, {useState} from 'react';
import {GrAddCircle} from "react-icons/gr";
import RadioButton from "@/Component/element/RadioButton";
import {BsAlignStart} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {AiOutlineFileSearch} from "react-icons/ai";
import {MdDoneAll} from "react-icons/md";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPages(props) {
    const [title, setTitle] = useState("")
    const [dispersion, setDispersion] = useState("")
    const [status, setStatus] = useState("todo")



    const addHandler = async () =>{
        const res = await fetch("/api/todos",{
            method:"POST",
            body:JSON.stringify({title, dispersion, status}),
            headers: {"Content-Type": "application/json"},
        })
        const data = await res.json()
        console.log(data)
        if (data.status === "success"){
            setTitle("")
            setDispersion("")
            setStatus("todo")
            toast.success("todo added!")
        }
    }





    return (
        <div className="add-form">
            <h2>
                <GrAddCircle/>
                Add New Todo
            </h2>

            <div className="add-form__input">
                <div className="add-form__input--first">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="add-form__input--first">
                    <label htmlFor="dispersion">dispersion:</label>
                    <input
                        id="dispersion"
                        type="text"
                        value={dispersion}
                        onChange={(e) => setDispersion(e.target.value)}
                    />
                </div>


                <div className="add-form__input--second">

                    <RadioButton
                        status={status}
                        setStatus={setStatus}
                        value="todo"
                        title="Todo"
                    >
                        <BsAlignStart />
                    </RadioButton>
                    <RadioButton
                        status={status}
                        setStatus={setStatus}
                        value="inProgress"
                        title="In Progress"
                    >
                        <FiSettings />
                    </RadioButton>
                    <RadioButton
                        status={status}
                        setStatus={setStatus}
                        value="review"
                        title="Review"
                    >
                        <AiOutlineFileSearch />
                    </RadioButton>
                    <RadioButton
                        status={status}
                        setStatus={setStatus}
                        value="done"
                        title="Done"
                        >
                        <MdDoneAll />
                    </RadioButton>
                </div>
                <button onClick={addHandler}>Add</button>
                <ToastContainer />
            </div>
        </div>
    );
}

export default AddTodoPages;