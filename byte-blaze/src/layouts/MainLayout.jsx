import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div className=" container mx-auto">
      <Nav />
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;