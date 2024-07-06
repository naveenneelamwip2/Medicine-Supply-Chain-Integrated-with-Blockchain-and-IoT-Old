import { DefaultController } from "@/controllers/default_controller";
import { IControllerRoute } from "fortjs";
import { UserController } from "./controllers/user_controller";
import { AuthController } from "./controllers/auth_controller";
import { MedicineController } from "./controllers/medicine_controller";

export const routes: IControllerRoute[] = [{
    path: "/*",
    controller: DefaultController
},
{
    path: "/user",
    controller: UserController
},
{
    path: "/medicine",
    controller: MedicineController
},
{
    path: "/auth",
    controller: AuthController
}
]