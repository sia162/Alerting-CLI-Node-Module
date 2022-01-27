const chalk = require("chalk");
const sym = require("log-symbols");

const green = chalk.green;
const red = chalk.red;
const blue = chalk.blue;
const orange = chalk.keyword("orange");
const blueI = chalk.blue.inverse;
const orangeI = chalk.keyword("orange").inverse;
const greenI = chalk.green.inverse.bold;
const redI = chalk.red.inverse.bold;

module.exports = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `all options not defined!`,
    name: ``,
  };

  const opts = { ...defaultOptions, ...options };
  const { type, msg, name } = opts;

  const printName = name ? name : type.toUpperCase();

  if (type === "success") {
    console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
  }
  if (type === "info") {
    console.log(`\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
  }
  if (type === "warning") {
    console.log(
      `\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`
    );
  }
  if (type === "error") {
    console.log(`\n${sym.error} ${redI(` ${printName} `)}  ${red(msg)}\n`);
  }
};
