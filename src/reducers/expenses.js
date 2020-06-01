//DEFAULT EXPENSE STATE
const expensesReducersDefaultState = [];

const expensesReducer = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => {
        //if the expression returns true the item would be kept if not it would be removed
        return expense.id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
