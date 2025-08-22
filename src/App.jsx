import Menubar from "./components/Menubar/Menubar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Explore from "./pages/Explore/explore.jsx";
import ManageCategories from "./pages/ManageCategories/ManageCategories.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import {Toaster} from "react-hot-toast";
import Login from "./pages/Login/Login.jsx";
const app =()=>{
    const location=useLocation();
    return (<div>
            {location.pathname !== "/login" && <Menubar />}
            <Toaster />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/categories" element={<ManageCategories />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/items" element={<ManageItems />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard/>} />

        </Routes>
        </div>
    );
}
export  default app;