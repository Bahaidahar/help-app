import { instance } from "@/src/shared/lib/axios";

export const getClientSupports = async () => {
    try {
      const res = await instance.get('support/get-client-supports');
      return res.data
    } catch (error:any) {
        return error.response.data.detail
    }
  }