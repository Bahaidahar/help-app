import AsyncStorage from '@react-native-async-storage/async-storage';

import axios, {
    AxiosRequestConfig,
    AxiosInstance,
    AxiosError,
    AxiosResponse,
  } from "axios";


  export const instance = axios.create({
    baseURL: "https://helpserviceforaged-production.up.railway.app/api/v1/",
  });
  
  const onRequest = async (config: AxiosRequestConfig): Promise<any> => {
    if (config?.headers) {
      const token = await AsyncStorage.getItem("refresh");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };
  
  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  
  const onResponseError = async (error: any): Promise<AxiosError> => {
    // if (error.response && error.config) {
    //   if (
    //     error.response.status === 401
    //   ) {
    //     // error.config.isRetry = true;
    //     try {
    //       // const res = await instance.post(`/auth/signin/update-refresh`, {
    //       //   jwt: await AsyncStorage.getItem("refresh"),
    //       // });
    //       // const access = res.data.refresh_token;
    //       // const refresh = res.data.refresh_token;
    //       // await AsyncStorage.setItem("access", access);
    //       // await AsyncStorage.setItem("refresh", refresh);
    //       error.config!.headers = { ...error.config!.headers };
    //       return instance(error.config);
    //     } catch (_error) {
    //         await AsyncStorage.removeItem("access");
    //         await AsyncStorage.removeItem("refresh");
    //         router.push('/')
    //       return Promise.reject(_error);
    //     }
    //   }
    // }
    return Promise.reject(error);
  };

  export const setupInterceptorsTo = (
    axiosInstance: AxiosInstance
  ): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  };
  

  export default setupInterceptorsTo(instance);
  





