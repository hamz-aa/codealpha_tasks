/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const initialValues = {
  category: "",
  description: "",
  amount: "",
  date: "",
};

function AddExpense({ transaction, setTransaction, balance, setBalance }) {
  const [flag, setFlag] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [key, setKey] = useState(0);

  const expenseRef = useRef();
  const incomeRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const transactionHandler = (e) => {
    let cat,
      target = e.target.name;
    if (values.description === "" || values.amount === "") return;
    if (target === "expense") {
      cat = expenseRef.current.value;
      setBalance({
        total: balance.total - Number(values.amount),
        income: balance.income,
        expense: balance.expense + Number(values.amount),
      });
    }
    if (target === "income") {
      cat = incomeRef.current.value;
      setBalance({
        total: balance.total + Number(values.amount),
        income: balance.income + Number(values.amount),
        expense: balance.expense,
      });
    }
    setTransaction([
      ...transaction,
      { ...values, id: target, category: cat, key: key },
    ]);
    setKey(key + 1);
    setValues(initialValues);
  };

  function btnHandler() {
    setFlag(!flag);
  }

  return (
    <div className="add-expense">
      <h3>Add Expense</h3>
      <div className={`buttons ${flag && "active"}`}>
        <button onClick={btnHandler}>Expense</button>
        <button onClick={btnHandler}>Income</button>
      </div>
      <div className="form-wrapper">
        <div className={`form expense-form ${flag && "active"}`}>
          <div>
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                value={!flag ? values.category : "Drinks"}
                onChange={handleInputChange}
                ref={expenseRef}
              >
                <option value="Drinks">Drinks</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={!flag ? values.description : ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={!flag ? values.amount : 0}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={!flag ? values.date : ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button name="expense" onClick={transactionHandler}>
            ADD
          </button>
        </div>
        <div className={`form income-form ${!flag && "active"}`}>
          <div>
            <div>
              <label htmlFor="category-income">Category</label>
              <select
                name="category"
                id="category-income"
                disabled
                value="Income"
                onChange={handleInputChange}
                ref={incomeRef}
              >
                <option value="Income">Income</option>
              </select>
            </div>
            <div>
              <label htmlFor="description-income">Description</label>
              <input
                type="text"
                id="description-income"
                name="description"
                value={flag ? values.description : ""}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="amount-income">Amount</label>
              <input
                type="number"
                id="amount-income"
                name="amount"
                value={flag ? values.amount : 0}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date-income">Date</label>
              <input
                type="date"
                id="date-income"
                name="date"
                value={flag ? values.date : ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button name="income" onClick={transactionHandler}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
