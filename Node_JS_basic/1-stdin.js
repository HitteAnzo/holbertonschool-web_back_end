// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data input from the user
process.stdin.on('data', (data) => {
  // Convert the input data to a string and trim any extra whitespace
  const name = data.toString().trim();
  
  // Output the user's name
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Inform the user that the software is closing
  process.stdout.write('This important software is now closing\n');

  
  // End the input stream
  process.stdin.end();
});
