import { IUserAuth } from "@/src/shared/interface/UserAuth";
import { instance } from "@/src/shared/lib/axios";



export const singup = async ({ password, phone }: IUserAuth) => {
    try {
        const res = await instance.post('auth/signup/register',{username:phone,password:password})
        return res.data.message
    } catch (error:any) {
        return error.response.data.detail
    }
  }