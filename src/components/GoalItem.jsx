function GoalItem({ goal, onDelete }) {
  const { id, name, savedAmount, targetAmount } = goal;
  const percent = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px 0", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Saved: ${savedAmount} / ${targetAmount}</p>
      <div style={{ background: "#ddd", width: "100%", height: "10px" }}>
        <div style={{ width: `${percent}%`, height: "10px", backgroundColor: "green" }} />
      </div>
      <p>{percent}% complete</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
export default GoalItem;

