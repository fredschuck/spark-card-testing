import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* <Header /> */}
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
