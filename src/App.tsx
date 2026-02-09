import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/auth/Auth";
import { Login } from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Protected from "./security/Protected";
import UnAuthRoute from "./security/UnAuthRoute";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UnAuthRoute />}>
            <Route element={<Auth />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Route>
          </Route>

          <Route element={<GlobalLayout />}>
            <Route path="/" element={<LandingPage />} />

            <Route element={<Protected allowed={"ROLE_USER"} />}>
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Products />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
