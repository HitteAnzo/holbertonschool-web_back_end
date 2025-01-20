/**
 * This program prompts the user for their name and displays a greeting.
 * It also displays a closing message when the program ends.
 */

// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

