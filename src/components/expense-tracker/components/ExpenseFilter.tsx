import React from "react";
import categories from "./categories";
interface props {
  onselectcategory: (category: string) => void;
}
const ExpenseFilter = ({ onselectcategory }: props) => {
  return (
    <select
      className="from-select"
      onChange={(event) => onselectcategory(event.target.value)}
    >
      <option value="">All categories</option>;
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
export default ExpenseFilter;
