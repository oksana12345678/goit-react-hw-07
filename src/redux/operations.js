import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6658a6345c361705264958fb.mockapi.io";

export const fetchContact = createAsyncThunk("contact/fetchAll"
    async (_, thunkAPI) => {
        try {
            const response =
        }catch(error){}
    }
);
