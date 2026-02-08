import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Protected({allowed}: {allowed: string | string[]}) {
    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/', {replace: true})
            return
        } 
        
        const roles = Array.isArray(allowed) ? allowed : [allowed];
        const hasAccess = user.roles.some(r => roles.includes(r))
        if(!hasAccess) navigate('/', {replace: true})
    }, [user, allowed, navigate])

    return <Outlet />
}
