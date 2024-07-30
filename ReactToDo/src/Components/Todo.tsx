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
  const [filter, setfilter] = useState("all");
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
  function filteringTodo() {
    if (filter === "all") {
      return todo;
    } else if (filter === "active") {
      return todo.filter((task) => task.checked !== true);
    } else if (filter === "completed") {
      return todo.filter((task) => task.checked === true);
    } else {
      return todo;
    }
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
              : filteringTodo().map((todoelement, index) => {
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
              <div className="todo-count">
                {todo.filter((e) => e.checked === false).length} Task Remaining
              </div>
              <div className="todo-shows-container">
                <span className="all-control" onClick={() => setfilter("all")}>
                  All
                </span>
                <span
                  className="active-control"
                  onClick={() => setfilter("active")}
                >
                  Active
                </span>
                <span
                  className="completed-control"
                  onClick={() => setfilter("completed")}
                >
                  Completed
                </span>
              </div>
              <div className="todo-clear-btn">
                <span
                  className="clear-btn"
                  onClick={() => {
                    settodo([]);
                  }}
                >
                  Clear Todo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
