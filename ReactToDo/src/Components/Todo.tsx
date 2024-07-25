import { useRef, useState } from "react";
import "../Styles/Todo.scss";
export default function Todo() {
  const [todo, settodo] = useState<String[]>([]);
  let todoInput = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let newtodoItem = todoInput.current?.value;
    newtodoItem ? settodo([...todo, newtodoItem]) : "";
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-container-header"></div>
        <div className="todo-container-content-container">
          <h2 className="todo-content-container-heading">TODO</h2>
          <div className="todo-input-container">
            <form action="" onSubmit={handleSubmit}>
              <input type="checkbox" name="" id="checkbox" disabled />
              <label htmlFor="checkbox" className="label-input-box">
                <input
                  type="text"
                  id="todo-input"
                  placeholder="Create A New ToDo..."
                  autoComplete="off"
                  ref={todoInput}
                  autoFocus
                />
              </label>
            </form>
          </div>
          <div className="todo-task-container">
            {todo.length === 0 ? "Not Tasks Found" : ""}
          </div>
        </div>
      </div>
    </>
  );
}
