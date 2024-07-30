import { ReactElement, useRef, useState } from "react";
import "../Styles/Todo.scss";
import "../Styles/ToDoItem.scss";
import toast from "react-hot-toast";
import { FaRegCircleXmark } from "react-icons/fa6";
export type TODO = {
  text: string;
  checked: boolean;
};
export default function Todo() {
  const [todo, settodo] = useState<TODO[]>([]);
  let todoInput = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todoInput.current && todoInput.current.value !== "") {
      let newtodoItem: TODO = {
        text: todoInput.current.value,
        checked: false,
      };
      if (newtodoItem) {
        settodo([...todo, newtodoItem]);
        todoInput.current ? (todoInput.current.value = "") : "";
        toast.success("Item Added");
      }
    } else {
      toast.error("please enter something");
    }
  }
  function handleRemove(index: number) {
    settodo(todo.filter((tsak, i) => i !== index));
    toast.success("Task Deleted");
  }
  function handleChecking(index: number) {
    settodo(
      todo.map((task, i) => (i === index ? { ...task, checked: true } : task))
    );
    toast.success("Task Completed");
  }
  function handleUnchecking(index: number) {
    settodo(
      todo.map((task, i) => (i === index ? { ...task, checked: false } : task))
    );
    toast.error("Task Inprogress");
  }
  function allToDo() {
    settodo([...todo]);
  }
  function onlyActiveTask() {
    settodo(todo.filter((task) => task.checked !== true));
  }
  function onlyCompletedTask() {
    settodo(todo.filter((task) => task.checked === true));
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
                  placeholder="Create a new todo..."
                  autoComplete="off"
                  ref={todoInput}
                  autoFocus
                />
              </label>
            </form>
          </div>
          <div className="todo-task-container">
            {todo.length === 0
              ? "Not Tasks Found"
              : todo.map((todoelement, index) => {
                  return (
                    <div className="each-todo-item">
                      <div className="each-todo-item-content-container">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          onChange={(e) => {
                            e.target.checked
                              ? handleChecking(index)
                              : handleUnchecking(index);
                          }}
                        />

                        <div className="each-todo-item-content">
                          {todoelement.checked ? (
                            <span className="task-completed">
                              {todoelement.text}
                            </span>
                          ) : (
                            todoelement.text
                          )}
                        </div>
                      </div>
                      <div className="each-item-todo-btn">
                        <FaRegCircleXmark onClick={() => handleRemove(index)} />
                      </div>
                    </div>
                  );
                })}
            <div className="todo-controls-container">
              <div className="todo-count"></div>
              <div className="todo-shows-container"></div>
              div.todo-clear
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
