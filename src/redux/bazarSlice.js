import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    productData: [],
    userInfo: null,
};
 
export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
           const item= state.productData = state.productData.filter(
                (item) => item._id !== action.payload._id
            );
              if (item) {
                  item.quantity += action.payload.quantity;
           } else {
           state.productData.push(action.payload);
                
            } 
        }, 
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload._id
            );
        }
        // resetCart: (state) => {
        //     state.productData = [];
        // },
        
    },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;
// //  addToCart: (state, action) => {
//             const item = state.productData.find((item) => item._id === action.payload._id);
//             if (item) {
//                 item.quantity += action.payload.quantity
//             } else {
//             state.productData.push(action.payload);
                
//             } 