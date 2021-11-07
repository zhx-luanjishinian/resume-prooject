import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
// import { getUserInfoUsingGET } from 'api/admin-platform-controller';
// import { IUserInfoView } from 'api/models';
import { IAuth } from '../router/renderRoutes';
const authToObj = (arr) => {
  return arr.reduce((acc, current) => {
    acc[current] = true;
    return acc;
  }, {});
};

const initialState = {
  auth: {},
  userInfo: undefined,
};
export const globalStore = createSlice({
  name: 'global',
  initialState,
  //   reducers: {
  //     setUserInfo: (state, action) => {
  //       state.userInfo = action.payload;
  //       state.auth = authToObj(action.payload.admin ? ['admin'] : []);
  //     },
  //   },
});
export const globalAction = globalStore.actions;

export default globalStore.reducer;

// export const asyncFetchUserInfo = (params) => (dispatch) => {
//   getUserInfoUsingGET()
//     .then((res) => {
//       dispatch(globalAction.setUserInfo(res.data));
//     })
//     .catch((e) => {
//       params.fail?.();
//     })
//     .finally(() => {
//       params.finally?.();
//     });
// };
