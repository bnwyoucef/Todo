import React, { useState } from "react";
import TodoList from "./features/todo/TodoList";
import "./App.css";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div id="app">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList searchValue={searchValue} />
      <Footer />
    </div>
  );
}

export default App;
