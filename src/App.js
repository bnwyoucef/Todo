import React from "react";
import TodoList from "./features/todo/TodoList";
import "./App.css";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app">
      <Search />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
