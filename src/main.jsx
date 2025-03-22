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
  name: "Fred Schuck",
  profilePicture:
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bannerImage:
    "https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  bio: "Passionate about building intuitive interfaces and solving complex problems with clean code. Currently focused on React and TypeScript development.",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/fredschuck" },
    { name: "X", url: "https://x.com/iamfredschuck" },
    { name: "LinkedIn", url: "https://linkedin.com/in/fredschuck" },
    { name: "Portfolio", url: "https://olaolu.dev" },
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
