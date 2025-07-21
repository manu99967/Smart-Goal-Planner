import { useEffect, useState } from "react";
import {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoalById,
  makeDeposit,
} from "./utils/api";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals().then(setGoals);
  }, []);

  const handleAddGoal = async (goal) => {
    const newGoal = await addGoal(goal);
    setGoals([...goals, newGoal]);
  };

  const handleUpdateGoal = async (id, updates) => {
    const updated = await updateGoal(id, updates);
    setGoals(goals.map(g => g.id === id ? updated : g));
  };

  const handleDelete = async (id) => {
    await deleteGoalById(id);
    setGoals(goals.filter(g => g.id !== id));
  };

  const handleDeposit = async (id, amount) => {
    const updated = await makeDeposit(id, amount);
    setGoals(goals.map(g => g.id === id ? updated : g));
  };

  return (
    <div className="App">
      <h1>SMART Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <Overview goals={goals} />
      <GoalList goals={goals} onUpdate={handleUpdateGoal} onDelete={handleDelete} />
    </div>
  );
}
export default App;

