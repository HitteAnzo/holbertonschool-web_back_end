/**
 * This program prompts the user for their name and displays a greeting.
 * It also displays a closing message when the program ends.
 */

// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  // Display the user's name
  process.stdout.write(`Your name is: ${name}`);
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
