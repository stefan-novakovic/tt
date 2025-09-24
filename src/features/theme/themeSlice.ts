import { createSlice } from '@reduxjs/toolkit';

const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(savedTheme); // set class immediately

const initialState: { mode: string } = {
   mode: savedTheme
};

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      toggleTheme: (state) => {
         state.mode = state.mode === 'light' ? 'dark' : 'light';

         localStorage.setItem('theme', state.mode);
         html.classList.remove('light', 'dark');
         html.classList.add(state.mode);
      }
   }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
