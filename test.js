const alert = require("./index.js");

alert({
  type: "info",
  msg: "hello, it is a info!",
  name: "Important Notice",
});
alert({
  type: "success",
  msg: "hello, it is a success!",
});
alert({
  type: "warning",
  msg: "hello, it is a warning!",
});
alert({
  type: "error",
  msg: "hello, it is a error!",
});

// `✔ SUCCESS: All done!`;
// `⚠ WARNING: All done!`;
