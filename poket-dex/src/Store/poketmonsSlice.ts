import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPoketmonsAPI,
  PoketmonListResponseType,
} from "../Service/poketmonService";

// First, create the thunk
export const fetchPoketmons = createAsyncThunk(
  "poketmon/fetchpoketmons",
  async (nextURL?: string) => {
    const response = await fetchPoketmonsAPI(nextURL);
    return response;
  }
);

interface PoketmonState {
  poketmons: PoketmonListResponseType;
}

const initialState = {
  poketmons: {
    count: 0,
    next: "",
    results: [],
  },
} as PoketmonState;

const poketmonsSlice = createSlice({
  name: "poketmons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPoketmons.fulfilled,
      (state, action: PayloadAction<PoketmonListResponseType>) => {
        if (state.poketmons.results.length > 0) {
          state.poketmons = {
            ...action.payload,
            results: [...state.poketmons.results, ...action.payload.results],
          };
        } else {
          state.poketmons = action.payload;
        }
        // Add user to the state array
      }
    );
  },
});

export const poketmonsReducer = poketmonsSlice.reducer;
