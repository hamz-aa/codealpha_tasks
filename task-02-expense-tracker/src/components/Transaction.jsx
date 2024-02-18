const Transaction = () => {
  return (
    <div className="expense-wrapper">
      <div className="name-date">
        <p>Water</p>
        <p>1/1/2024</p>
      </div>
      <p className="description">my water bottle made of plastic</p>
      <p className="amount">5000</p>
      <button>Remove</button>
    </div>
  );
};

export default Transaction;
