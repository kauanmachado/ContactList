import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "./AxiosConfig";


export class UserServices {
    SignIn(data: DataProps): Promise<AxiosResponse>{
        return axiosInstance.post("/user/sign-in", data)
     }
    SignUp(data: any): Promise<AxiosResponse>{
        return axiosInstance.post("/user/sign-up", data)
    }
}