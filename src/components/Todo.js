import React from 'react';
import { useState } from 'react'

function Todo() {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Kitob o'qish",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Uhlash",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Code yozish",
            isCompleted: false,
        },
    ])

    const handleSubmit = (evt) =>{
        evt.preventDefault();
       
        const newTodo = {
            id: todos[todos.length -1].id + 1,
            text: value,
            isCompleted: false,
        }
        setTodos([...todos, newTodo])
        setValue("");
    }

    function deleteList(id){
        const newList = todos.filter(element => element.id != id)
        setTodos(newList)
    }
    function editList(id){
        const newEdit = prompt("Edit a task");
        console.log(newEdit);
        const newEditList = todos.find(element => element.id == id)
        newEditList.text = newEdit;
        console.log(newEditList)
        setTodos([...todos])
    }

  return <>

    <form onSubmit={handleSubmit} className='m-5'>
        <input type="text" value={value} onChange={(evt) => setValue(evt.target.value)} placeholder='Enter task' />
        <button type='submit'>Add</button>
    </form>
    <ul className='list-unstyled m-5'>
        {todos.map(element => 
        <li className='d-flex align-items-center mb-3' key={element.id}>
            <p className='m-0 me-2'>{element.text}</p>
            <input className='me-3' type="checkbox" />
            <button  onClick={() => editList(element.id)}  className='me-3' type='button'>Edit</button>
            <button  onClick={() => deleteList(element.id)} type='button'>Delete</button>
        </li>
        )}
    </ul>
  </>
}

export default Todo;
