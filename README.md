# 💸 Smart Goal Planner

A React-based fintech application that helps users manage multiple financial savings goals. Users can track progress, make deposits, and stay on top of deadlines for various personal financial goals — all backed by a local JSON server.

---

## 🚀 Features

- 🗂️ **Create, Read, Update, Delete (CRUD)** savings goals
- 📊 **Track goal progress** with visual progress bars
- 💰 **Make deposits** toward any goal
- 🔍 **Overview dashboard** with savings summary
- ⚠️ **Warnings** for goals near deadline or overdue
- 📁 **Data persisted** with `json-server` via `db.json`

---

## 📦 Project Structure
smart-goal-planner/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── GoalCard.jsx
│   │   ├── GoalForm.jsx
│   │   ├── DepositForm.jsx
│   │   └── Overview.jsx
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── db.json
├── index.html
├── package.json
├── vite.config.js
└── README.md

### Goal Status Logic
✅ Completed: savedAmount ≥ targetAmount

⚠️ Deadline in 30 days: show a warning if not complete

❌ Overdue: deadline passed and goal not complete

#### Technologies Used
React

Vite

JSON Server

JavaScript (ES6+)

HTML/CSS

##### License
MIT license

###### Author
EMMANUEL/manu99967
