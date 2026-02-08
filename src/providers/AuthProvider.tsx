import { type Dispatch, createContext, useState, type ReactNode, type SetStateAction, useEffect } from "react"
import { refreshApi } from "../api/refresh";
import type { AxiosResponse } from "axios";
import axios from "axios";
import type { TData, TUser } from "../lib/validation/types/types";



type TToken = string | null

type TContext = {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
  token: TToken;
  setToken: Dispatch<SetStateAction<string | null>>;
};


export const AuthContext = createContext<TContext>({
  user: null,
  setUser: () => {} ,
  token: null,
  setToken: () => {},
});



export default function AuthProvider({children}: {children: ReactNode}) {
const [user, setUser] = useState<TUser | null>(() => {
    const stored = localStorage.getItem('user');
    if(!stored) return null;
    try{
        return JSON.parse(stored) as TUser;
    }catch(e){
        return null
    }
});
const [token, setToken] = useState<string | null>(null);

useEffect(()=> {
    console.log("running")
    const refreshToken = async () => {
        try {
            const res : AxiosResponse<TData> = await refreshApi.post("");
            setToken(res.data.token)
            setUser(res.data.user)
        } catch (error: unknown) {
            setToken(null)
            setUser(null)
            if(axios.isAxiosError(error)){
                console.log(error.response?.data.message);
            }
        }
    };
    refreshToken();
},[])

// for testing
useEffect(()=>{
    console.log(token);
    console.log(user);
},[token, user])

useEffect(()=>{
    if(user) localStorage.setItem('user', JSON.stringify(user))
    if(!user) localStorage.removeItem('user')
},[user])

return <AuthContext.Provider value={{user, setUser, token, setToken}}>{children}</AuthContext.Provider>
}
