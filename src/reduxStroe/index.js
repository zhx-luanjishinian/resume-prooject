import { configureStore } from '@reduxjs/toolkit';
import global, { IGlobalState } from './global';

export default configureStore({
  reducer: {
    global,
  },
});
// declare module "react-redux" {
//   interface DefaultRootState {
//     global: IGlobalState;
//   }
// }
