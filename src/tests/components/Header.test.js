import React from "react";
import Header from "../../components/Header";
// import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find("h1").length).toBe(1);
  // expect(wrapper.find("h1").text()).toBe("Expensify");
});
