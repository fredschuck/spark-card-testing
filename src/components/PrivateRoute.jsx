import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ adminOnly = false }) => {
  const location = useLocation();

  // Get user from your authentication system
  // This is a placeholder - replace with your actual auth logic
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if user is admin when required
  if (adminOnly && (!user || user.role !== "admin")) {
    // Redirect to login if not logged in, or homepage if logged in but not admin
    return (
      <Navigate to={user ? "/" : "/login"} state={{ from: location }} replace />
    );
  }

  // For regular protected routes
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
