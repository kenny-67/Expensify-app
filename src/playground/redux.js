import { createStore, combineReducers } from "redux";
import { v1 as uuidv1 } from "uuid";

//ADD EXPENSE
const addExpense = ({
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

//DEFAULT EXPENSE STATE
const expensesReducersDefaultState = [];

const expensesReducer = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    default:
      return state;
  }
};

//SORT BY AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//SORT BY DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//Filter Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount ") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "orange", amount: 4000, createdAt: -1000 })
);

console.log(store.getState());

store.dispatch(sortByDate());

console.log(store.getState());
