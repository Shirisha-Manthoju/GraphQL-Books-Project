import React from "react";
import "./App.css";
import BooksList from "./components/pages/BooksList";
import { Route, Routes } from "react-router-dom";
import Books from "./components/pages/Books";
import Mutation from "./components/pages/Mutation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/:id" element={<Books />} />
        <Route path="/add" element={<Mutation />} />
      </Routes>
    </div>
  );
}

export default App;
