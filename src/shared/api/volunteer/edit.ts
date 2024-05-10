import { instance } from "@/src/shared/lib/axios";

export const editStaff = async () => {
    try {
      const res = await instance.post('staff/edit-user');
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }