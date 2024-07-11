
import { Medicine } from '@/models/medicine';
import { singleton } from "fortjs";
import keccak256 from "keccak256";
import { UserService } from "./user_service";
import { ethers } from 'ethers';
import { medicineContractAbi } from './contract_abi';

interface IUpdateMedicine {
    _id: string;
    status?: string;
}

export class MedicineService {
    provider_url = process.env.provider_url
    provider_key = process.env.provider_key

    contractAddress = process.env.user_contract;

    provider = new ethers.JsonRpcProvider(this.provider_url)
    signer = new ethers.Wallet(this.provider_key, this.provider)

    userAddress = this.signer.address

    contract = new ethers.Contract(this.contractAddress, medicineContractAbi, this.provider)
    contractWithSigner = this.contract.connect(this.signer)

    userService: UserService;
    constructor(@singleton(UserService) userService: UserService) {
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
        // const updateMedicine = await MedicineSchema.updateOne({ _id: medicine._id }, {
        //     status: medicine.status
        // });

        // return updateMedicine;
    }
}