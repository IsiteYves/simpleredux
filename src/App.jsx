import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route index element={<ListUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
