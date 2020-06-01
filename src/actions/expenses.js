import { v1 as uuidv1 } from "uuid";

//ADD EXPENSE
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv1(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

//REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
