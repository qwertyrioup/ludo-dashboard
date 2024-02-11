import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    LoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.LoggedIn = true;
      state.user = action.payload;
    },

    updateBalance: (state, action) => {
      // const { balance } = action.payload;
      // console.log(balance)
      // @ts-ignore
      state.user = { ...state.user, balance: action.payload };
    },

    logoutUser: (state) => {
      (state.user = null), (state.LoggedIn = false);
    },
  },
});

export const { loginUser, logoutUser, updateBalance } = userSlice.actions;
export default userSlice.reducer;
