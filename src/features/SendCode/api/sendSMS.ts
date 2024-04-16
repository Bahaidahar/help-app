
import { instance } from "@/src/shared/lib/axios";

export const sendSMS = async (phone:string) => {
    try {
      const res = await instance.post('auth/signup/send-sms-code', { username: phone });
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }