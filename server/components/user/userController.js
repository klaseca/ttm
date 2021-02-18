const { v4: uuidv4 } = require('uuid');
const User = require('./userModel');

const userController = {
  auth: async (data) => {
    const user = await User.findOne({ email: data.payload.email }).exec();

    if (!user) {
      return {
        event: data.event,
        error: 'User is not defined',
        data: {},
      };
    }

    if (user.password !== data.payload.password) {
      return {
        event: data.event,
        error: 'Invalid password',
        data: {},
      };
    }

    return {
      event: data.event,
      error: '',
      data: { email: user.email, todos: user.todos },
    };
  },
  addTodo: async (data) => {
    const { email, ...todo } = data.payload;
    const newTodo = { id: uuidv4(), ...todo };
    await User.findOneAndUpdate(
      { email: email },
      { $push: { todos: newTodo } }
    ).exec();

    return {
      event: data.event,
      error: '',
      data: { ...newTodo },
    };
  },
  updateTodo: async (data) => {
    try {
      const { email, id, ...todo } = data.payload;
      await User.findOneAndUpdate(
        { email: email, 'todos.id': id },
        {
          $set: {
            'todos.$.name': todo.name,
            'todos.$.description': todo.description,
          },
        }
      ).exec();

      return {
        event: data.event,
        error: '',
        data: {
          id,
          name: todo.name,
          description: todo.description,
        },
      };
    } catch (error) {
      console.log(error);
    }
  },
  removeTodo: async (data) => {
    const { email, id } = data.payload;

    await User.findOneAndUpdate(
      { email: email },
      {
        $pull: { todos: { id } },
      }
    ).exec();

    return {
      event: data.event,
      error: '',
      data: {
        id,
      },
    };
  },
};

module.exports = userController;
