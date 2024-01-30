import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const SET_USERS = 'users/setUsers'

export const setUsers = createAsyncThunk(
    SET_USERS, 
    async (args, {rejectWithValue }) => {
  
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

}

)