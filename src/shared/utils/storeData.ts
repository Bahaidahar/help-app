import AsyncStorage from "@react-native-async-storage/async-storage"

interface IStoreData{
    name:string,
    storeData:string
}

export const storeData = async({name,storeData}:IStoreData)=>{
    try {
        await AsyncStorage.setItem(name,storeData)
    } catch (error) {
        console.warn(error)
    }
}

export const getData = async(name:string)=>{
    try {
       const res=  await AsyncStorage.getItem(name)
       return res
    } catch (error) {
        console.warn(error)
    }
}

export const removeData = async(name:string)=>{
    try {
        await AsyncStorage.removeItem(name)
    } catch (error) {
        console.warn(error)
    }
}