// Import this module as throwError
// So like this:
// const throwError = require('../utilities/showUserError');
// And then used like this throwError(res, 'STRING', 'STRING')

module.exports = (res, directTo, message) => {
  console.log("direct To:", directTo, "because:", message);
  res.render(directTo, { error: message });
};
