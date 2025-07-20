import React, { useState } from "react";

function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required type="number" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" value={formData.deadline} onChange={handleChange} required type="date" />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
