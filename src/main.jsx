import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Home, Profile, Login, SignUp } from "./pages";
// import PrivateRoute from "./components/PrivateRoute";
// import AdminDashboard from './pages/AdminDashboard' // Create this component
// import UserManagement from './pages/admin/UserManagement' // Create this component
// import ProfileManagement from './pages/admin/ProfileManagement' // Create this component
// import NotFound from './pages/NotFound' // Create this component

// Default props in case no user data is passed
const user = {
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/150",
  bio: "I love coding and building cool stuff!",
  socialLinks: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Portfolio", url: "https://example.com" },
  ],
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public routes */}
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected user routes */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/profile" element={<Profile user={user} />} />
      {/* </Route> */}

      {/* Admin routes */}
      {/* <Route path="/admin" element={<PrivateRoute adminOnly={true} />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="profiles" element={<ProfileManagement />} />
      </Route> */}

      {/* 404 route */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
