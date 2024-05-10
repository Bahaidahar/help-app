import { instance } from "@/src/shared/lib/axios";

export const create = async (des:string, address:string) => {
    try {
      const res = await instance.post('support/create-support',{address:address, description:des});
      return res
    } catch (error:any) {
        return error.response.data.detail
    }
  }