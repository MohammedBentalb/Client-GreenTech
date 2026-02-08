import { LogOut } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../api/api";

export default function LogoutButton({ mobile }: { mobile: boolean }) {
    const {setUser, setToken} = useAuth()
    const navigate = useNavigate()

    const logUserOut = async () => {
      try {
        const response = await api.delete("/auth/logout");
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        navigate("/", { replace: true });
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        }
        navigate("/", { replace: true });
      }
    };

  return !mobile ? (
    <button
      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
      onClick={logUserOut}
    >
      <LogOut className="w-4 h-4 text-gray-600" />
      <span className="text-sm text-gray-700">Déconnexion</span>
    </button>
  ) : (
    <button
      className="flex items-center gap-3 text-gray-700 text-sm font-medium"
      onClick={logUserOut}
    >
      <LogOut className="w-4 h-4" />
      Déconnexion
    </button>
  );
}
