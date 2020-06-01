import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";

test("should render expense list with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expense list with empty expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
