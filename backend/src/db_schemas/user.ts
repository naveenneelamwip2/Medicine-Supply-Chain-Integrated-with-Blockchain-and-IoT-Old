import { Schema, model } from "mongoose";
import { IUser } from "@/interfaces/user";

const schemaObj = new Schema({
    emailId: { type: String },
    // name: { type: String },
    // password: { type: String },
    // contactNumber: { type: String },
    // address: { type: String },
    // organization: { type: String },
    userId: { type: String },
});

export const UserSchema = model<IUser>('User', schemaObj);