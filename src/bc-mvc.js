import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--no': Boolean,
      '--mongodb': String,
      '--store-hash': String,
      '--store-token': String,
      '--store-client': String,
      '--store-secret': String,
      '--port': Number,
      '-m': '--mongodb',
      '-h': '--store-hash',
      '-t': '--store-token',
      '-c': '--store-client',
      '-s': '--store-secret',
      '-p': '--port',
      '-n': '--no'
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--no'] || false,
    mongodb: args['--mongodb'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = 'MongoDB';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which type of database to use',
      choices: ['MongoDB', 'Sample Data'],
      default: defaultTemplate,
    });
  }

  if (!options.mongodb) {
    questions.push({
      type: 'confirm',
      name: 'mongodb',
      message: 'Use an existing mongoDB?',
      default: true,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    mongodb: options.mongodb || answers.mongodb,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
