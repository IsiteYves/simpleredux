import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveNewUser } from "../../saveNewUser";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      saveNewUser(formData);
      setFormData({
        name: "",
        age: "",
        email: "",
      });
      alert("Created user successfully");
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div>
      <Link to="/">Back to List</Link>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
