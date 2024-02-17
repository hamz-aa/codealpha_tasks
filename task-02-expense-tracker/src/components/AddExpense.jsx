function AddExpense() {
  return (
    <div className="add-expense">
      <h3>Add Expense</h3>
      <div className="buttons">
        <button>Expense</button>
        <button>Income</button>
      </div>
      <div className="form-wrapper">
        <div className="form expense-form">
          <div>
            <div>
              <label htmlFor="category">Category</label>
              <select name="" id="category">
                <option value="">Drinks</option>
                <option value="">Food</option>
                <option value="">Transport</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
            </div>
          </div>
          <button>ADD</button>
        </div>
        <div className="form income-form">
          <div>
            <div>
              <label htmlFor="category">Category</label>
              <select name="" id="category" disabled>
                <option value="">Income</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" />
            </div>
          </div>
          <button>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
