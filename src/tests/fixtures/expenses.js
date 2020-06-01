import moment from "moment";

export default [
  {
    id: "123",
    description: "Gum",
    note: "",
    amount: 12333,
    createdAt: 0,
  },
  {
    id: "345",
    description: "rent",
    note: "",
    amount: 109500,
    //takes the current date, subtract 4 days from it and convert it to timestamp
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "678",
    description: "card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
