import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="app-wrapper">
        <Balance />
        <AddExpense />
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
