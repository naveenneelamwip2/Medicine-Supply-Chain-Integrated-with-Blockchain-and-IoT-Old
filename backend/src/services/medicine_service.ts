
import { Medicine } from '@/models/medicine';
import { singleton } from "fortjs";
import keccak256 from "keccak256";
import { UserService } from "./user_service";

interface IUpdateMedicine {
    _id: string;
    status?: string;
}

export class MedicineService {

    userService: UserService;
    constructor(@singleton(UserService) userService: UserService){
        this.userService = new UserService;
    }

    async addMedicine(medicine: Medicine, user) {

        // let otherParticipant = await this.userService.getUserByPlatformId(medicine.platformId);

        // const medicineObj = new MedicineSchema(medicine);
        // return await medicineObj.save();
    }

    async getMedicineById(id: string) {
        // const medicine = await MedicineSchema.findById(id);
        // return medicine;
    }

    async getMedicineByEmail(email: string) {
        // const medicine = await MedicineSchema.find({emailId:email});
        // return medicine;
    }

    async getAllMedicines() {
        // const medicines = await MedicineSchema.find();
        // return medicines;
    }

    async removeMedicineById(id: string) {
        // return await MedicineSchema.deleteOne({ _id: id });
    }

    async updateMedicine(medicine: any) {
        if(medicine.status === "approved") medicine.status="Paid"

        // const updateMedicine = await MedicineSchema.updateOne({ _id: medicine._id }, {
        //     status: medicine.status
        // });

        // return updateMedicine;
    }
}