const messages = [
  'Hector',
  'Cely',
  'Emelia',
  'Pedro',
  'Nicolay',
  'Diego',
  'Yesica',
  'Ana',
  'Oscar',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
