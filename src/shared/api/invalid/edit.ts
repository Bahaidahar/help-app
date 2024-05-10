import { instance } from "@/src/shared/lib/axios";
import { IClient } from "../../interface";

export const editClient = async ({iin,avatar,born_at,first_name,last_name,description,illnesses,photo,address}:IClient) => {
    try {
      const res = await instance.post('client/edit-user');
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }