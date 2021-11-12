import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos(){

    const [todo,setTodo]= useState([])

    useEffect(() => {
        getTodos();
    })

    const getTodos = async ()=>{
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log(response.data)

        setTodo(response.data)
    }

    

    

    return (
        <div className="container">

        <table className="table table-hover ">
        <thead>
            <tr>
                <th>ID</th>
                <th>UserID</th>
                <th>Title</th>
                <th>Complted</th>
            </tr>
        </thead>
        <tbody>
            {
                todo.map((item) => {
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? 'true' :'false'}</td>
                        </tr>
                    )
                })
            }
            {/* <tr>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'true' :'false'}</td>
            </tr> */}
            </tbody>
            </table>
        </div>
    )
}

export default Todos;