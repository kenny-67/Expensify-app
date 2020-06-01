import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should set up defailt filters values", () => {
  //@@init checks the default state at the start of the redux store or wjen the store is first initialized
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY_DATE" };

  const state = filtersReducer(currentState, action);
  //   expect(state).toEqual({
  //     text: "",
  //     sortBy: "date",
  //     startDate: undefined,
  //     endDate: undefined,
  //   });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "e",
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    ...state,
    text: action.text,
  });
});

test("should set start date filter", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: "-1000",
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe("-1000");
});

test("should set end date filter", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: "1000",
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe("1000");
});
