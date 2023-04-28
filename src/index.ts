import chalk from "chalk";
import figlet from "figlet";
import prompts from "prompts";

async function init() {
  const results = await startPrompt();

  if (!results) {
    console.log(chalk.red("No results"));

    return;
  }

  figlet(`Hi ${results.name}!`, (error, data) => {
    if (error) {
      console.error(chalk.red(error));
      return;
    }

    if (!data) {
      console.error(chalk.red("No data"));
      return;
    }

    console.log(data);
  });
}

async function startPrompt() {
  try {
    return await prompts([{
      type: "text",
      message: "What is your name?",
      name: "name",
      validate: value => {
        if (value.length < 3) {
          return chalk.red(`Must be at least 3 characters long`);
        }

        return true;
      }
    }]);

  } catch (canceled) {
    if (canceled instanceof Error) {
      console.log(chalk.red("Canceled", canceled.message));
      return
    }

    console.log(chalk.red("Unhandled unknown rejection"));
  }
}

init().catch(error => {
  console.error(chalk.red(error));
  process.exit(1);
});