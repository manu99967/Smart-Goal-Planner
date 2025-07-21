import { parseISO, differenceInDays } from "date-fns";

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
      <ul>
        {goals.map(g => {
          const daysLeft = differenceInDays(parseISO(g.deadline), new Date());
          const isComplete = g.savedAmount >= g.targetAmount;
          let status = "";

          if (!isComplete && daysLeft < 0) status = "❌ Overdue";
          else if (!isComplete && daysLeft <= 30) status = "⚠️ Deadline Near";

          return (
            <li key={g.id}>
              {g.name} — {daysLeft} days left {status && <strong>({status})</strong>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Overview;

