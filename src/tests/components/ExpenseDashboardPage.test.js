import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashbordPage";

test("should render expense dashboard", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
