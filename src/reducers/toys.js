import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        name:"Mr Quackers"
    },
    {
        name: "spiderman ball"
    },
    {
        name: "star wars bat"
    }
]

const toySlice = createSlice({
    name:"toys",
    initialState,
    reducers:{
        addToy:(state, action)=>{
            console.log(action.payload)
            state.push(action.payload)
        }
    }
})

export const {addToy}=toySlice.actions;

export default toySlice.reducer;