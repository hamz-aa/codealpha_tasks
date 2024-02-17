import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="app-wrapper">
        <Balance />
        <AddExpense />
        <Transactions />
      </div>
    </>
  );
}

export default App;
