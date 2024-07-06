import { MedicineService } from "@/services/medicine_service";
import { MedicineValidatorGuard } from "@/guards/medicine_validator_guard";
import { worker, Controller, HTTP_METHOD, HTTP_STATUS_CODE, http, jsonResult, textResult, route, singleton, guards, shields, Guard, TGuard, Fort } from "fortjs";
import { auth } from "fortjs-passport";

@shields(auth.shield("isAuthenticated"))
export class MedicineController extends Controller {

    service: MedicineService;
    constructor(@singleton(MedicineService) service: MedicineService) {
        super();
        this.service = service;
    }

    @http.get("/")
    async getMedicines() {
        return jsonResult(await this.service.getAllMedicines());
    }

    @worker(HTTP_METHOD.Post)
    @route("/")
    @guards(MedicineValidatorGuard)
    async addMedicine() {
        Fort.logger.log(`Request received to create new medicine`);

        const {user} = this.request as any;

        const newMedicine = await this.service.addMedicine(this.data.medicine, user);

        Fort.logger.log(`Request completed to create new medicine`);

        return jsonResult(newMedicine, HTTP_STATUS_CODE.Created);
    }

    @worker(HTTP_METHOD.Put)
    @route("/")
    // @guards(MedicineValidatorGuard)
    async updateMedicine() {
        // const medicine = this.data.medicine;
        Fort.logger.log(`Request received to update medicine ${this.body._id}`);

        let updateMedicine = this.service.updateMedicine(this.body);

        Fort.logger.log(`Request completed to update a medicine ${updateMedicine}`);

        return jsonResult(updateMedicine, HTTP_STATUS_CODE.Created);

    }

    @worker(HTTP_METHOD.Delete)
    @route("/{id}")
    async removeByQueryString() {
        const medicineId = this.param.id;

        Fort.logger.log(`Request received to delete a medicine ${medicineId}`);
        const medicine = this.service.getMedicineById(medicineId);
        if (medicine != null) {
            this.service.removeMedicineById(medicineId);
            return textResult("medicine deleted");
        } else {
            return textResult("invalid medicine", 404);
        }
    }
}