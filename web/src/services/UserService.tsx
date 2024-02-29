import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class UserServices {
    SignIn(data: any): Promise<AxiosResponse>{
        return 0;
    }
    SignUp(data: any): Promise<AxiosResponse>{
        return axiosInstance.post("/user/sign-up", data)
    }
}