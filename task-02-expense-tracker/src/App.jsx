import { useState } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import TransactionsList from "./components/TransactionsList";

function App() {
  const [balance, setBalance] = useState({
    total: 0,
    income: 0,
    expense: 0,
  });

  const [transaction, setTransaction] = useState([]);

  function handleBalance(item) {
    const newBalance = { ...balance };
    newBalance[item.id] -= Number(item.amount);
    if (item.id === "expense") newBalance.total += Number(item.amount);
    else if (item.id === "income") newBalance.total -= Number(item.amount);
    setBalance(newBalance);
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="app-wrapper">
        <Balance balance={balance} />
        <AddExpense
          transaction={transaction}
          setTransaction={setTransaction}
          balance={balance}
          setBalance={setBalance}
        />
        <TransactionsList
          transaction={transaction}
          setTransaction={setTransaction}
          setHandleBalance={handleBalance}
        />
      </div>
    </>
  );
}

export default App;
