const userController = require('./components/user/userController');

const events = {
  auth: userController.auth,
  addTodo: userController.addTodo,
  updateTodo: userController.updateTodo,
  removeTodo: userController.removeTodo,
};

const messageHandler = async (message) => {
  const data = JSON.parse(message);

  const event = events[data.event];
  if (event) {
    return await event(data);
  }
  return { error: 'Invalid event', data: {} };
};

module.exports = messageHandler;
