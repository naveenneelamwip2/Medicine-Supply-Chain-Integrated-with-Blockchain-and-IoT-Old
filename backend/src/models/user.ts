import { Length, Contains, IsIn, IsEmail } from "class-validator";

export class User {
    _id?: number;

    @Length(5)
    name: string;

    @IsEmail()
    emailId: string;

    @Length(5)
    password?: string;

    @Length(5)
    contactNumber?: string;

    @Length(5)
    userId?: string;

    @Length(5)
    address?: string;

    @Length(5)
    organization?: string;

    constructor(user: User) {
        this._id = Number(user._id);
        this.name = user.name;
        this.emailId = user.emailId;
        this.password = user.password;
        this.contactNumber = user.contactNumber;
        this.userId = user.userId;
        this.address = user.address;
        this.organization = user.organization;
        this.organization = user.organization;
    }
}