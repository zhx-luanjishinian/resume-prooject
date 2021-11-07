import {
  createSlice,
  PayloadAction,
  // Dispatch,
} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};
export const xxxStore = createSlice({
  name: 'xxx',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const xxxAction = xxxStore.actions;

export default xxxStore.reducer;

// const asyncActionName = () => (dispatch: Dispatch<any>) => {
//   // get async data
//   dispatch(xxxAction.setLoading(false));
// };
