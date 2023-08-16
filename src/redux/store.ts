import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import cart from './slices/cartSlice';
import catalogSlice from './slices/catalogSlice';
import filterSlice from './slices/filterSlice';


export const store = configureStore({
	reducer: {
		cart,
		catalogSlice,
		filterSlice,

	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();