import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";
import moment from "moment";

test("should set the start date", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should set the end date", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should set the text filter", () => {
  const action = setTextFilter("name");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "name",
  });
});

test("should set the text filter with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should set the sort by value to be amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should set the sort by value to be date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});
