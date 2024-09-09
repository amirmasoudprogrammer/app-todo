import React from 'react';
import {RiMacbookLine} from "react-icons/ri";
import Link from "next/link";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

function Tasks({data, Datafetch, back, next }) {


    const checkStatus = async (id, status) => {
        const res = await fetch("/api/todos", {
            method: "PATCH",
            body: JSON.stringify({id, status}),
            headers: {"Content-Type": "application/json"},
        })
        const data = await res.json()
        console.log(data)
        if (data.status === "success") Datafetch()
    }



        return (
            <div className="tasks">

                {data?.map((i) => (

                    <div key={i._id} className="tasks__card">
                        <span className={i.status}></span>
                        <RiMacbookLine/>
                        <Link href={`/${i._id}`}>
                            <h4>{i.title}</h4>
                        </Link>

                        <div>
                            {back ? (
                                <button className="button-back" onClick={() => checkStatus(i._id, back)}>
                                    <BiLeftArrow/> back
                                </button>) : null}
                            {next ? (<button className="button-next"
                                             onClick={() => checkStatus(i._id, next)}> next <BiRightArrow/>
                            </button>) : null}
                        </div>
                        <div className="dispersion">
                            {i.dispersion ? (<p>{i.dispersion}</p>) : null}
                        </div>
                    </div>
                ))}
                <div>

                </div>

            </div>
        );

}

export default Tasks