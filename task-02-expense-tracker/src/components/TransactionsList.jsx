import Transaction from "./Transaction";

const TransactionsList = () => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="top-headings">
        <h5>Expenses</h5>
        <h5>Transactions</h5>
      </div>
      <div className="transactions-wrapper">
        <div className="expense">
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
        <div className="income">
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
