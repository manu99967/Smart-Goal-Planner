const BASE_URL = "http://localhost:3000/goals";

export async function getGoals() {
  const res = await fetch(BASE_URL);
  return await res.json();
}

export async function addGoal(goal) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return await res.json();
}

export async function updateGoal(id, updates) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return await res.json();
}

export async function deleteGoalById(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}

export async function makeDeposit(id, amount) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const goal = await res.json();
  const updated = {
    savedAmount: goal.savedAmount + amount,
  };
  return await updateGoal(id, updated);
}

