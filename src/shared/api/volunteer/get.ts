import { instance } from "@/src/shared/lib/axios";

export const getStaff = async () => {
    try {
      const res = await instance.get('staff/get-user');
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }