import { Navigate, Route, Routes } from "react-router"
import { RegisterPage, CryptoPage } from "../pages";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";

export const CryptoRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={
            <PublicRoute>
                <RegisterPage />
            </PublicRoute>} />
            <Route path="/CryptoPage" element={
                <PrivateRoute>
                    <CryptoPage />
                </PrivateRoute>
            } />
            <Route path="/*" element={<Navigate to={"/"} replace={true} />} />
        </Routes>
    </>
  )
}
