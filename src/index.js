const messages = ['Hector', 'Cely', 'Emelia', 'Pedro'];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
