import { combineSlices } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";

export const rootReducer = combineSlices(cartSlice);
