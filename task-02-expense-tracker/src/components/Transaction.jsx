import icon from "../assets/close-icon.svg";

/* eslint-disable react/prop-types */
const Transaction = ({ tr, setHandleTransactions, setHandleBalance }) => {
  return (
    <div className="expense-wrapper">
      <div className="name-date">
        <p>{tr.category}</p>
        <p>{tr.date}</p>
      </div>
      <p className="description">{tr.description}</p>
      <p className="amount">${tr.amount}</p>
      <button
        onClick={() => {
          setHandleBalance(tr);
          setHandleTransactions(tr.key);
        }}
      >
        <img src={icon} alt="" />
      </button>
    </div>
  );
};

export default Transaction;
