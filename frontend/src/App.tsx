import React from "react";
import { AuthProvider } from "./features/auth/shared/context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateRoute from "./shared/components/privateRoute/PrivateRoute";
import Home from "./pages/home/Home";
import NotFound from "./shared/components/notFound/NotFound";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
