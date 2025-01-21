import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../globel/Loader";

const HomePage = React.lazy(() => import("../Pages/globel/HomePage"));
const SignupPage = React.lazy(() => import("../Pages/user/RegisterPage"));
const LoginPage = React.lazy(() => import("../Pages/user/LoginPage"));
const NotFoundPage = React.lazy(() => import("../globel/NotFound"));
const ErrorBoundryPage = React.lazy(() => import("../globel/ErrorBoundray"));
const OtpPage = React.lazy(() => import("../Pages/user/otpVerifyPage"));
const RoutePage = () => {
  return <div>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <ErrorBoundryPage fallback={<h2>Oops! An error occurred.</h2>}>
           <Routes>
             <Route path="/"  element={<HomePage/>} />
             <Route path="/signup" element={<SignupPage/>} />
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/otp" element={<OtpPage/>} />
             <Route path="*" element={<NotFoundPage/>} />
           </Routes>
        </ErrorBoundryPage>
      </Suspense>
    </BrowserRouter>
  </div>;
};

RoutePage.displayName = 'NotFoundPage';

export default RoutePage;
