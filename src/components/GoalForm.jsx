import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      ...formData,
      id: crypto.randomUUID(),
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString(),
    };
    onAddGoal(newGoal);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} type="number" placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input name="deadline" value={formData.deadline} onChange={handleChange} type="date" required />
      <button type="submit">Add Goal</button>
    </form>
  );
}
export default GoalForm;

