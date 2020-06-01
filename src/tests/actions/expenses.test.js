import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import { v1 as uuidv1 } from "uuid";

test("should add an expense", () => {
  const expense = {
    description: "rent",
    createdAt: 1000,
    note: "",
    amount: 109500,
    id: uuidv1(),
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test("should setup add exense with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      createdAt: 0,
      note: "",
      amount: 0,
      id: expect.any(String),
    },
  });
});

test("should remove an expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should edit an expense", () => {
  const action = editExpense("123", {
    description: "some random",
    note: "for your eyes only",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      description: "some random",
      note: "for your eyes only",
    },
  });
});
