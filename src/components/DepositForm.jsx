import { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [goalId, setGoalId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount("");
    setGoalId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}
export default DepositForm;

