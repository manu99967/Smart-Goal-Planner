function GoalCard({ goal, onDelete }) {
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const percent = Math.min((savedAmount / targetAmount) * 100, 100);
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isWarning = daysLeft <= 30 && savedAmount < targetAmount;
  const isOverdue = daysLeft < 0 && savedAmount < targetAmount;
  const isComplete = savedAmount >= targetAmount;

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${percent}%` }}></div>
      </div>
      <p>{isComplete ? "✅ Complete" : `${daysLeft} days left`}</p>
      {isWarning && <p className="warning">⚠️ Warning</p>}
      {isOverdue && <p className="overdue">❌ Overdue</p>}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
