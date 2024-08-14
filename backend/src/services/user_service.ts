import { User } from '@/models/user';
import { ethers } from 'ethers';
import { userContractAbi } from './contract_abi'
require('dotenv').config()
import { createHash } from 'crypto'
import * as CryptoJS from 'crypto-js';
import axios from 'axios';
import { Client } from '@web3-storage/w3up-client';

// Eth connect
const provider_url = process.env.provider_url
const provider_key = process.env.provider_key

const contractAddress = process.env.user_contract;

const provider = new ethers.JsonRpcProvider(provider_url)
const signer = new ethers.Wallet(provider_key, provider)

const userAddress = signer.address

const contract = new ethers.Contract(contractAddress, userContractAbi, provider)
const contractWithSigner = contract.connect(signer) as any;

export class UserService {

    // async generateUniqueHash(input: string) {
    //     const hash = createHash('sha256');
    //     hash.update(input);
    //     return hash.digest('hex');
    // }
    async storeDetailsOnIPFS(ipfsData) {

        return
    }

    async retrieveDetailsFromIPFS(CID) {

        return
    }


    async addUser(user: User) {

        // encryption part for user json can taken later after completing ipfs storage
        // const encrypted = await this.encrypt(user.name);
        // const decrypted = await this.decrypt(encrypted);

        const userCID = await this.storeDetailsOnIPFS(user);

        const tx = await contractWithSigner.mintUser(user.emailId, userCID);
        await tx.wait();
        console.log(`User creation ${tx}`);
    }

    static async getUserByEmail(email: string) {

        return null
        //naveen
        const userHash = await contractWithSigner.getUserHash(email);
        const response = await this.retrieveDetailsFromIPFS(userHash) as any;
        const userDetails = JSON.parse(response.toString());
        console.log(`User Details - Name: ${userDetails.name}, Contact No: ${userDetails.contactNo}, Email ID: ${userDetails.emailId}, Address: ${userDetails.userAddress}`);
        return userDetails;
    }
    static retrieveDetailsFromIPFS(userHash: any) {
        throw new Error('Method not implemented.');
    }

    async getAllUsers() {
        // const users = await UserSchema.find();
        // console.log(users);
        // return users;
    }

    async removeUserById(id: string) {

    }

    async updateUser(user: User) {

    }

    private key = CryptoJS.enc.Utf8.parse('4512631236589784');
    private iv = CryptoJS.enc.Utf8.parse('4512631236589784');
    private encryptionMethod = 'AES-256-CBC';

    async encrypt(plainData: string): Promise<string> {
        const encryptor = CryptoJS.AES.encrypt(plainData, this.key, {
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptor.toString();
    }

    async decrypt(encryptedData: string): Promise<string> {
        const decryptor = CryptoJS.AES.decrypt(encryptedData, this.key, {
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decryptor.toString(CryptoJS.enc.Utf8);
    }
}