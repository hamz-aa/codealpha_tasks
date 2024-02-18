/* eslint-disable react/prop-types */
function Balance({ balance }) {
  return (
    <div className="balance">
      <div className="total-balance">
        <p>Total Balance</p>
        <p>${balance.total}</p>
      </div>
      <div className="income">
        <p>Income</p>
        <p>${balance.income}</p>
      </div>
      <div className="expense">
        <p>Expense</p>
        <p>${balance.expense}</p>
      </div>
    </div>
  );
}

export default Balance;
