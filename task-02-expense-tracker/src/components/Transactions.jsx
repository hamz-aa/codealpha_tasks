const Transactions = () => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="top-headings">
        <h5>Expenses</h5>
        <h5>Transactions</h5>
      </div>
      <div className="transactions-wrapper">
        <div className="expense">
          <div className="expense-wrapper">
            <div className="name-date">
              <p>Water</p>
              <p>1/1/2024</p>
            </div>
            <p className="description">my water bottle made of plastic</p>
            <p className="amount">5000</p>
            <button>Remove</button>
          </div>
          <div className="expense-wrapper">
            <div className="name-date">
              <p>Water</p>
              <p>1/1/2024</p>
            </div>
            <p className="description">my water bottle made of plastic</p>
            <p className="amount">5000</p>
            <button>Remove</button>
          </div>
          <div className="expense-wrapper">
            <div className="name-date">
              <p>Water</p>
              <p>1/1/2024</p>
            </div>
            <p className="description">my water bottle made of plastic</p>
            <p className="amount">5000</p>
            <button>Remove</button>
          </div>
        </div>
        <div className="income">
          <div className="income-wrapper">
            <div className="name-date">
              <p>Income</p>
              <p>1/1/2024</p>
            </div>
            <p className="description">my water bottle made of plastic</p>
            <p className="amount">5000</p>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
