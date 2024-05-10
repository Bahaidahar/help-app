import { IClient } from "@/src/shared/interface";
import { instance } from "@/src/shared/lib/axios";



export const addClient = async () => {
    try {
      const res = await instance.post('client/add-user',{iin:null,avatar:null,born_at:null,first_name:null,last_name:null,description:null,illnesses:null,photo:null,address:null});
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }