import { useEffect, useState } from "react";
import { fetchGoals, createGoal, updateGoal, deleteGoal } from "./utils/api";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm.jsx";
import GoalCard from "./components/GoalCard.jsx";
import Overview from "./components/Overview.jsx";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAdd = (goal) => {
    createGoal(goal).then((newGoal) => setGoals((prev) => [...prev, newGoal]));
  };

  const handleDelete = (id) => {
    deleteGoal(id).then(() => setGoals((prev) => prev.filter((g) => g.id !== id)));
  };

  const handleDeposit = (id, amount) => {
    const goal = goals.find((g) => g.id === id);
    const updated = { savedAmount: goal.savedAmount + amount };
    updateGoal(id, updated).then((newData) => {
      setGoals((prev) => prev.map((g) => (g.id === id ? newData : g)));
    });
  };

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAdd={handleAdd} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <div className="goal-list">
        {goals.map((g) => (
          <GoalCard key={g.id} goal={g} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;

