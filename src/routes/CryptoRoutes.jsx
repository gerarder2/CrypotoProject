import { Navigate, Route, Routes } from "react-router"
import { RegisterPage, CryptoPage } from "../pages";
import { PrivateRoute, PublicRoute } from "./";

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
            <Route path="/*" element={<Navigate to={"/"}/>}/>
        </Routes>
    </>
  )
}
