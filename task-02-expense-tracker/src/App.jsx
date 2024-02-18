import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="app-wrapper">
        <Balance />
        <AddExpense />
        <TransactionsList />
      </div>
    </>
  );
}

export default App;
