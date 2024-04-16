import AsyncStorage from '@react-native-async-storage/async-storage';

import axios, {
    AxiosRequestConfig,
    AxiosInstance,
    AxiosError,
    AxiosResponse,
  } from "axios";
import { router } from 'expo-router';
  

  export const instance = axios.create({
    baseURL: "https://helpserviceforaged-production.up.railway.app/api/v1/",
  });
  
  const onRequest = (config: AxiosRequestConfig): any => {
    if (config?.headers) {
      const token = AsyncStorage.getItem("access");
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
    if (error.response && error.config) {
      if (
        error.response.status === 401 ||
        (error.config.data === undefined && !error.config?.isRetry)
      ) {
        error.config.isRetry = true;
        try {
          const res = await instance.post(`/auth/signin/update-refresh`, {
            jwit: await AsyncStorage.getItem("refresh"),
          });
          const access = res.data.refresh_token;
          await AsyncStorage.setItem("access", access);
          error.config!.headers = { ...error.config!.headers };
          return instance(error.config);
        } catch (_error) {
            await AsyncStorage.removeItem("access");
            await AsyncStorage.removeItem("refresh");
            router.push('/')
          return Promise.reject(_error);
        }
      }
    }
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
  





