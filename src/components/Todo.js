import React from "react"
import { useState } from "react"
import "./todo.css"

function Todo() {
  const [value, setValue] = useState("")
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

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      text: value,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
    setValue("")
  }

  function deleteList(id) {
    const newList = todos.filter((element) => element.id !== id)
    setTodos(newList)
  }
  function editList(id) {
    const newEdit = prompt("Edit a task")
    console.log(newEdit)
    const newEditList = todos.find((element) => element.id !== id)
    newEditList.text = newEdit
    console.log(newEditList)
    setTodos([...todos])
  }
  // function checked(id){
  //     const checkedList = todos.filter(element => element.id != id)
  // }
  return (
    <>
      <div className="container">
        <form
          className="w-50 mx-auto my-5 input-group mb-3"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control"
            type="text"
            value={value}
            aria-label="Enter your task"
            onChange={(evt) => setValue(evt.target.value)}
            placeholder="Enter task"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Add
          </button>
        </form>
        <ul className="w-50 mx-auto list-unstyled m-5">
          {todos.map((element) => (
            <li
              className="d-flex align-items-center mb-3 text-bg-secondary p-3 rounded-3"
              key={element.id}
            >
              <input className="me-3 todo-check" type="checkbox" aria-label="check" defaultChecked={element.isCompleted} />
              <p className="m-0 me-auto text">{element.text}</p>
              <button
                onClick={() => editList(element.id)}
                className="btn btn-warning me-3"
                type="button"
              >
                Edit
              </button>
              <button
                className="btn btn-success"
                onClick={() => deleteList(element.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Todo;
