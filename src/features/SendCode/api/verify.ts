
import { instance } from "@/src/shared/lib/axios";

export const verify = async (phone:string,code:string) => {
    try {
      const res = await instance.post('auth/signup/verify-sms-code', { username: phone, code:code });
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }