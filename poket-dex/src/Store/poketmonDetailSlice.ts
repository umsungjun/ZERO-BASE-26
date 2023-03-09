import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import {
  fetchPoketmonDetailAPI,
  PoketmonDetailType,
  PoketmonListResponseType,
} from "../Service/poketmonService";

// First, create the thunk
export const fetchPoketmonDetail = createAsyncThunk(
  "poketmon/fetchpoketmonDetail",
  async (name: string) => {
    const response = await fetchPoketmonDetailAPI(name);
    return response;
  },
  {
    condition: (name, { getState }) => {
      const { poketmonDetail } = getState() as RootState;
      const poketmon = poketmonDetail.poketmonDetails[name];

      return !poketmon;
    },
  }
);

interface PoketmonDetailState {
  // poketmonDetails: {
  // '이상해씨' : PoketmonDetailType
  //}

  poketmonDetails: Record<string, PoketmonDetailType>;
}

const initialState = {
  poketmonDetails: {},
} as PoketmonDetailState;

const poketmonDetailSlice = createSlice({
  name: "poketmonDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPoketmonDetail.fulfilled,
      (state, action: PayloadAction<PoketmonDetailType>) => {
        state.poketmonDetails = {
          ...state.poketmonDetails,
          [action.payload.name]: action.payload,
        };
      }
    );
  },
});

export const poketmonDetailReducer = poketmonDetailSlice.reducer;
