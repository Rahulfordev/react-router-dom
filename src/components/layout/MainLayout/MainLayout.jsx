import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
