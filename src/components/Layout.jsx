import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
       <div>
        <h2> Editor de Texto Royal</h2>
        <Navbar />
        <Outlet />
        
        
       </div> 
    );
}

export default Layout;
