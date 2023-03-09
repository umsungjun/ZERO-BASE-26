import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { POKETMON_IMAGE_TYPE } from "../Constants";

export type PoketmonImageKeyType =
  typeof POKETMON_IMAGE_TYPE[keyof typeof POKETMON_IMAGE_TYPE];

export interface ImageTypeState {
  type: PoketmonImageKeyType;
}

const initialState: ImageTypeState = {
  type: POKETMON_IMAGE_TYPE.FROND_DEFAULT,
};

export const imageTypeSlice = createSlice({
  name: "imageType",
  initialState,
  reducers: {
    changeImageType: (state, action: PayloadAction<ImageTypeState>) => {
      state.type = action.payload.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeImageType } = imageTypeSlice.actions;

export const imageTypeReducer = imageTypeSlice.reducer;
