import React, {useEffect, useState} from 'react';
import Tasks from "@/Component/module/Tasks";

function Homepages(props) {
    const [todos, setTodos] = useState("")

    useEffect(() => {
        Datafetch()
    },[])

    const Datafetch = async () => {
        const res = await fetch("/api/todos")
        const data = await res.json()
        console.log(data)
        if (data.status === "success") setTodos(data.data.todos)

    }


    return (
        <div className="home-page">
            <div className="home-page--todo">
                <p>todo</p>
                <Tasks Datafetch={Datafetch} data={todos.todo} next="inProgress" />

            </div>
            <div className="home-page--inProgress">
                <p>inProgress</p>
                <Tasks Datafetch={Datafetch} data={todos.inProgress} next="review" back="todo" />
            </div>
            <div className="home-page--review">
                <p>review</p>
                <Tasks Datafetch={Datafetch} data={todos.review} next="done"  back="inProgress"/>
            </div>
            <div className="home-page--done">
                <p>done</p>
                <Tasks Datafetch={Datafetch} data={todos.done} back="review"  />
            </div>

        </div>
    );
}

export default Homepages;