import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function UnAuthRoute() {
    const navigate = useNavigate()
    const {user} = useAuth()

    useEffect(() => {
        if(user) navigate("/" , {replace: true})
    }, [user, navigate])
  return <Outlet />
}
