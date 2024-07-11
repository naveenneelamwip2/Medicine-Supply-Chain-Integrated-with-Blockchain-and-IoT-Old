import { UserSchema } from "@/db_schemas/user";
import { User } from '@/models/user';
import { ethers } from 'ethers';
import { userContractAbi } from './contract_abi'

export class UserService {
    provider_url = process.env.provider_url
    provider_key = process.env.provider_key

    contractAddress = process.env.user_contract;

    provider = new ethers.JsonRpcProvider(this.provider_url)
    signer = new ethers.Wallet(this.provider_key, this.provider)

    userAddress = this.signer.address

    contract = new ethers.Contract(this.contractAddress, userContractAbi, this.provider)
    contractWithSigner = this.contract.connect(this.signer)

    async addUser(user: User) {
        // user.platformId = (Math.floor(Math.random()*90000) + 10000).toString();
        // const userObj = new UserSchema(user);
        // return await userObj.save();
    }

    async getUserByPlatformId(id: string) {
        const user = await UserSchema.findOne({ platformId: id });
        return user;
    }

    static async getUserByEmail(email: string) {
        const user = await UserSchema.findOne({ emailId: email });
        return user;
    }

    async getAllUsers() {
        const users = await UserSchema.find();
        console.log(users);
        return users;
    }

    async removeUserById(id: string) {
        return await UserSchema.deleteOne({ _id: id });
    }

    async updateUser(user: User) {
        const updateUser = await UserSchema.updateOne({ _id: user._id }, {
            // name: user.name,
            // gender: user.gender,
            emailId: user.emailId,
            // address: user.address
        });
        return updateUser;
    }
}