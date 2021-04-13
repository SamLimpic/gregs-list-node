
import mongoose from "mongoose";
import CarSchema from "../models/Car";


// this is where models get registered and access from the db
class DbContext {
  Cars = mongoose.model("Car", CarSchema);
}

export const dbContext = new DbContext();