import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducer = {
  user: userSlice,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});
