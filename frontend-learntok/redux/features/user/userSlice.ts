"use client";
import { createSlice } from "@reduxjs/toolkit";

let initialState: Props = {
  guest: { isUser: false },
  userInfo: {
    _id: "",
    email: "",
    favCategories: [],
    followers: [],
    following: [],
    password: "",
    fullName: "",
    joined: "",
    pfpUrl: "",
    userName: "",
  },
};

type Guest = {
  isUser: boolean;
};

type Props = {
  guest: Guest;
  userInfo: UserProp;
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      const userData = action.payload;
      state.userInfo = { ...state.userInfo, ...userData };
    },
    updateGuestInfo: (state, action) => {
      const guestData = action.payload;
      state.guest = { ...state.guest, ...guestData };
    },
  },
});

export const { updateUserInfo, updateGuestInfo } = userSlice.actions;
export default userSlice.reducer;
