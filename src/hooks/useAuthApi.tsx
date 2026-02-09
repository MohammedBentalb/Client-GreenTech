import { useMemo } from "react";
import useAuth from "./useAuth";
import { api } from "../api/api";
import { refreshApi } from "../api/refresh";

export default function useAuthApi() {
  const { token, setToken, setUser } = useAuth();

  return useMemo(() => {
    const authApi = api.create();
    let isRefreshing = false;

    authApi.interceptors.request.use((config) => {
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    authApi.interceptors.response.use(
      async (Response) => Response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status !== 401 || originalRequest._retry) {
          return Promise.reject(error);
        }
        originalRequest._retry = true;
        if (isRefreshing) {
          return Promise.reject(error);
        }
        isRefreshing = true;

        try {
          const response = await refreshApi.post("");
          setToken(response.data.token);
          setUser(response.data.user);
          return authApi(originalRequest);
        } catch (error) {
          setToken(null);
          setUser(null);
          return Promise.reject(error);
        }
      },
    );

    return authApi;
  }, [token]);
}
