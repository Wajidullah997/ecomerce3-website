import { configureStore } from "@reduxjs/toolkit";
import bazarSlice from "./bazarSlice";

export const store = configureStore({
    reducer: {
        bazar: bazarSlice
    },
});