/* eslint-disable react/prop-types */
import Transaction from "./Transaction";

const TransactionsList = ({ transaction, setTransaction }) => {
  function handleTransactions(key) {
    const newTransactions = transaction.filter((tr) => tr.key !== key);
    setTransaction(newTransactions);
  }

  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="top-headings">
        <h5>Expenses</h5>
        <h5>Income</h5>
      </div>
      <div className="transactions-wrapper">
        <div className="expense">
          {transaction?.map(
            (tr) =>
              tr.id === "expense" && (
                <Transaction
                  key={tr.key}
                  tr={tr}
                  setHandleTransactions={handleTransactions}
                />
              )
          )}
        </div>
        <div className="income">
          {transaction?.map(
            (tr) =>
              tr.id === "income" && (
                <Transaction
                  key={tr.key}
                  tr={tr}
                  setHandleTransactions={handleTransactions}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
