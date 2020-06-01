import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashbordPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashbordPage;
