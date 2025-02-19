import { Schema } from "inspector/promises";
import mongoose from "mongoose";


const user = new mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    sortDescription : {
        type : String,
    }
}) 