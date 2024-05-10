import { instance } from "@/src/shared/lib/axios";

export const addStaff = async () => {
    try {
      const res = await instance.post('staff/add-user', {iin:null,avatar:null,born_at:null,first_name:null,last_name:null,description:null,photo:null});
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }