import { instance } from "@/src/shared/lib/axios";

export const getClient = async () => {
    try {
      const res = await instance.get('client/get-user');
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }