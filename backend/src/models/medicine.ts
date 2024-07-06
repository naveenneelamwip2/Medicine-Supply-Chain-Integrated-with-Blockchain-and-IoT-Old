import { Length } from "class-validator";

export class Medicine {
    _id?: number;

    date?: Date;

    @Length(3)
    typeOfMedicine: string;

    @Length(5)
    place: string;

    @Length(1)
    principle: string;

    @Length(3)
    interest: string;

    @Length(5)
    platformId: string;

    @Length(5)
    lenderUserId: string;

    @Length(5)
    borrowerUserId: string;

    @Length(5, 100)
    status: string;

    constructor(Medicine: any) {
        this._id = Number(Medicine.id);
        this.date = Medicine.emailId;
        this.typeOfMedicine = Medicine.typeOfMedicine;
        this.place = Medicine.place;
        this.principle = Medicine.principle;
        this.interest = Medicine.interest;
        this.platformId = Medicine.platformId;
        this.lenderUserId = Medicine.lenderUserId;
        this.borrowerUserId = Medicine.borrowerUserId;
        this.status = Medicine.status;
    }
}