import { runCommand } from "./../tsScriptHelpers";

const printUsage = (): void => {
  console.log("Incorrect usage");
  console.log("Example of correct usage: gcam 'commit message'");
  process.exit(1);
};

const gitAddCommit = async (commitMessage: string): Promise<void> => {
  try {
    await runCommand("git add .");
    console.log("Staged all changes.");

    await runCommand(`git commit -m "${commitMessage}"`);
    console.log(`Committed changes with message: ${commitMessage}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occured: ${error.message}`);
    } else {
      console.log(`AN unknown error occured: ${error}`);
    }
    process.exit(1);
  }
};

const main = async () => {
  const args = process.argv;

  if (args.length !== 2) {
    printUsage();
  }

  const commitMessage = args[1];

  await gitAddCommit(commitMessage);
};

main();
