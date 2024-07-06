import { Document } from "mongoose";
export interface IMedicine extends Document {
    _id: string;
    name: string;
    price : string;
    quantity : string;
    image : string;
    description : string;
    lastUpdateDate : string;
    status : string;
    medicineId : string;
}
