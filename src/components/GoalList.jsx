import GoalItem from "./GoalItem";

function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(g => (
        <GoalItem
          key={g.id}
          goal={g}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default GoalList;
