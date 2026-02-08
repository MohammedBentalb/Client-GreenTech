import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function useAuth() {

    const context = useContext(AuthContext);
    if(context === undefined || !context) throw new Error("Can't be using auth context outside auth context")

        return context;
}
