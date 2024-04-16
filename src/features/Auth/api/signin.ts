import { IUserAuth } from "@/src/shared/interface/UserAuth";
import { instance } from "@/src/shared/lib/axios";
import { storeData } from "@/src/shared/utils/storeData";

export const singin = async ({ password, phone }: IUserAuth) => {
    try {
      const res = await instance.post('auth/signin/token', { username: phone, password: password },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
       await storeData({name:"access",storeData:`${res.data.access_token
       }`})
       await storeData({name:"refresh",storeData:`${res.data.refresh_token
       }`})
      return res.status
    } catch (error:any) {
        return error.response.data.detail
    }
  }