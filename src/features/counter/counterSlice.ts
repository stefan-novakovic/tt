import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/types';
import type { CounterState } from './counterTypes';

const initialState: CounterState = {
   value: 0
};

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => {
   await new Promise((resolve) => setTimeout(resolve, 500));
   return amount;
});

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment(state) {
         state.value += 1;
      },
      decrement(state) {
         state.value -= 1;
      }
   },
   extraReducers(builder) {
      builder
         .addCase(incrementAsync.pending, () => {
            console.log('Incrementing value...');
         })
         .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
         })
         .addCase(incrementAsync.rejected, (_, action) => {
            console.error('Increment failed', action.error);
         });
   }
});

export const { increment, decrement } = counterSlice.actions;

export const counterValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
