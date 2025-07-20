import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedId && amount) {
      onDeposit(selectedId, amount);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Make a Deposit</h2>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(g => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
