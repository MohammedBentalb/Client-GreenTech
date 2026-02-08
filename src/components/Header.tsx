import { ChevronDown, LayoutDashboard, Leaf, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {user} = useAuth()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-semibold text-gray-900">
              GreenTech
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to={"/products"}
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Products
            </Link>
            <a
              href="#features"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Fonctionnalités
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to={"/auth/login"}
                  className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium"
                >
                  Se connecter
                </Link>
                <Link
                  to={"/auth/register"}
                  //   onClick={onSignUp}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all text-sm font-medium"
                >
                  Créer un compte
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <User className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Mon compte
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-700 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {user.roles.includes("ROLE_ADMIN") ? (
                      <Link
                        to={"/dashboard"}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Dashboard</span>
                      </Link>
                    ) : (
                      <Link
                        to={"/profile"}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Profil</span>
                      </Link>
                    )}
                    <LogoutButton mobile = {false}/>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Fonctionnalités
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Contact
            </a>

            {!user ? (
              <>
                <Link
                  to={"/auth/login"}
                  className="block text-gray-700 hover:text-green-600 transition-colors text-sm font-medium"
                >
                  Se connecter
                </Link>
                <Link
                  to={"/auth/register"}
                  className="flex justify-center w-full bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all text-sm font-medium text-center"
                >
                  Créer un compte
                </Link>
              </>
            ) : (
              <div className="space-y-2 pt-2 border-t border-gray-200">
                {user.roles.includes('ROLE_ADMIN') ? (
                  <Link
                    to={"/dashboard"}
                    className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to={"/profile"}
                    className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                  >
                    <User className="w-4 h-4" />
                    Profil
                  </Link>
                )}
                <LogoutButton mobile/>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
