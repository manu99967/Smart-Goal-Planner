const API = "http://localhost:3000/goals";

export const fetchGoals = () => fetch(API).then((res) => res.json());

export const createGoal = (goal) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  }).then((res) => res.json());

export const updateGoal = (id, updates) =>
  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then((res) => res.json());

export const deleteGoal = (id) => fetch(`${API}/${id}`, { method: "DELETE" });
