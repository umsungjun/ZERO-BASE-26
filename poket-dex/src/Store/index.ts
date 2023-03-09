import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { imageTypeReducer } from "./imageTypeSlice";
import { poketmonDetailReducer } from "./poketmonDetailSlice";
import { poketmonsReducer } from "./poketmonsSlice";
// ...

export const store = configureStore({
  reducer: {
    imageType: imageTypeReducer,
    poketmons: poketmonsReducer,
    poketmonDetail: poketmonDetailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
