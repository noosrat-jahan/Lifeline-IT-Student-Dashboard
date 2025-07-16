// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { dashboardData } from "@/hooks/dashboardData";
import { useEffect, useState } from "react";

// ✅ Import env properly
const VITE_PUBLIC_PAGE = import.meta.env.VITE_PUBLIC_PAGE;

const PrivateRoute = ({ children }) => {
  //   const { data, isLoading, error } = dashboardData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          { withCredentials: true }
        );
        if (result.status === 200 && result.data.status === true) {
          setIsLoggedIn(true);
          setUser(result.data.user);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Login check error:", error.message);
      }
    };
    verifyLogin();
  }, []);

  //   if (isLoading) {
  //     return <div className="text-center py-10">Loading...</div>;
  //   }

  if (!isLoggedIn) {
    window.location.href = `${VITE_PUBLIC_PAGE}/login`;
    return null;
  }

  return children;
};

export default PrivateRoute;
// http://localhost:5173/dashboard/https://lifelineit-d5cbf.web.app/login
