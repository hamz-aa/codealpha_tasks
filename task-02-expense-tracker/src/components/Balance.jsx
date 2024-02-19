/* eslint-disable react/prop-types */
function Balance({ balance }) {
  const { total, income, expense } = balance;
  return (
    <div className="balance">
      <div className="total-balance">
        <p>Total Balance</p>
        <p>${total.toLocaleString() + ".00"}</p>
      </div>
      <div className="income">
        <p>Income</p>
        <p>{"+$" + income.toLocaleString() + ".00"}</p>
      </div>
      <div className="expense">
        <p>Expense</p>
        <p>{"-$" + expense.toLocaleString() + ".00"}</p>
      </div>
    </div>
  );
}

export default Balance;
