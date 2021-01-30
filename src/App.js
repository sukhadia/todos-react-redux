import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

const render = () => {
  const todos = store.getState();
  const todosEl = document.querySelector("#todos");
  if (todosEl)
    ReactDOM.render(
      todos.map((title) => <div>{title}</div>),
      todosEl
    );
};
export default function App() {
  const [title, setTitle] = useState("");
  store.subscribe(render);
  return (
    <div className="App">
      <h1>Todos</h1>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={(e) =>
          store.dispatch({
            type: "ADD_TODO",
            title
          })
        }
      >
        Add
      </button>
      <div id="todos">{render()}</div>
    </div>
  );
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.title);
    default:
      return state;
  }
};

const store = createStore(reducer);
