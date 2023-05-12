import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsers = createAsyncThunk("allUsers", async ()=>{
    try{
        // url is coming from an external api
        // internal api (express router) would be something like '/api/users'
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/");
        return data;
    } catch(err){
        console.log(err)
    }
})

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default userSlice.reducer;