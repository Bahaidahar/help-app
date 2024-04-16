import { instance } from "@/src/shared/lib/axios";
import { removeData } from "@/src/shared/utils/storeData";

export const singout = async (refresh:string) => {
    try {
      const res = await instance.post('auth/signout/token', { jwt:refresh });
       await removeData("access")
       await removeData("refresh")
      return res.status
    } catch (error:any) {
        return error.response.data.detail
    }
  }