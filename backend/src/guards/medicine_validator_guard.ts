import { Guard, textResult, HTTP_STATUS_CODE } from "fortjs";

export class MedicineValidatorGuard extends Guard {

    async check() {
        const medicine = {
            date: this.body.date,
            typeOfMedicine : this.body.typeOfMedicine,
            place : this.body.place,
            principle : this.body.principle,
            interest : this.body.interest,
            platformId : this.body.platformId,
            lenderUserId : this.body.lenderUserId,
            borrowerUserId : this.body.borrowerUserId,
            status : this.body.status            
        };
        const errMsg = this.validate(medicine);
        if (errMsg == null) {
            // pass medicine to worker method, so that they dont need to parse again  
            this.data.medicine = medicine;
            // returning null means - guard allows request to pass  
            return null;
        } else {
            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);
        }
    }
    
    validate(medicine) {
        let errMessage;
            // if (medicine.date == null || medicine.date.length < 10) {
            //     errMessage = "date length should be greater than 10";
            // }
            // else if (medicine.typeOfMedicine == null || medicine.typeOfMedicine.length < 10) {
            //     errMessage = "typeOfMedicine length should be greater than 10";
            // }
            // else if (medicine.place == null || medicine.place.length < 10) {
            //     errMessage = "place length should be greater than 10";
            // }
            // else if (medicine.principle == null || medicine.principle.length < 10) {
            //     errMessage = "principle length should be greater than 10";
            // }
            // else if (medicine.interest == null || medicine.interest.length < 10) {
            //     errMessage = "interest length should be greater than 10";
            // }
            // else if (medicine.platformId == null || medicine.platformId.length < 10) {
            //     errMessage = "platformId length should be greater than 10";
            // }
            // else if (medicine.status == null || medicine.status.length < 10) {
            //     errMessage = "status length should be greater than 10";
            // }
        return errMessage;
    }
}