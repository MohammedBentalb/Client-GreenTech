import { ArrowLeft, Leaf } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Auth() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-6 py-12 font-['Poppins',sans-serif]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-semibold text-gray-900">
              GreenTech
            </span>
          </div>
          <p className="text-sm text-gray-600">Bon retour parmi nous</p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden pt-6">
          <div className="p-8 pt-4">
            <Outlet />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          En vous connectant, vous acceptez nos conditions d'utilisation
        </p>
      </div>

      <div className="absolute top-10 left-10 cursor-pointer">
        <p onClick={() => navigate(-1)} className="flex justify-center items-center gap-1">
          <ArrowLeft size={16} /> Back
        </p>
      </div>
    </div>
  );
}
