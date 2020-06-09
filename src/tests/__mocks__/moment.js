//We are calling a mocked version of the moment library

const moment = require.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
