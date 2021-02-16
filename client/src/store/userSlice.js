import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    todos: [],
    email: '',
  },
  reducers: {},
});

export default userSlice.reducer;

export const selectEmail = (state) => state.user.email;

export const selectAllTodos = (state) => state.user.todos;

export const selectTodoById = (state, id) =>
  state.user.todos.find((todo) => todo.id === id);
