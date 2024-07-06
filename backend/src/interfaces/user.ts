import { Document } from "mongoose";
export interface IUser extends Document {
    _id: string;
    name: string;
    emailId?: string;
    password?: string;
    contactNumber?: string;
    address: string;
    userId?: string;
    organization?: string; 
}


