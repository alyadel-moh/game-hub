import React from "react";
interface expense {
  id: number;
  amount: number;
  description: string;
  category: string;
}
interface props {
  Expenses: expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ Expenses, onDelete }: props) => {
  if (Expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{Expenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
};
export default ExpenseList;
