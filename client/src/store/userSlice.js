import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    todos: [],
    email: '',
  },
  reducers: {
    auth: (state, { payload }) => {
      state.email = payload.email;
      state.todos = payload.todos;
    },
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    updateTodo: (state, { payload }) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[todoIndex] = { ...state.todos[todoIndex], ...payload };
    },
    removeTodo: (state, { payload }) => {
      const todos = state.todos.filter((todo) => todo.id !== payload.id);
      state.todos = todos;
    },
  },
});

export const { auth, addTodo, updateTodo, removeTodo } = userSlice.actions;

export default userSlice.reducer;

export const selectEmail = (state) => state.user.email;

export const selectAllTodos = (state) => state.user.todos;

export const selectTodoById = (state, id) =>
  state.user.todos.find((todo) => todo.id === id);
