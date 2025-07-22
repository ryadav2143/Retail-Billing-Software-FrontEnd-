import Menubar from "./components/Menubar/Menubar.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Explore from "./pages/Explore/explore.jsx";
import ManageCategories from "./pages/ManageCategories/manageCategories.jsx";
import ManageUsers from "./pages/ManageUsers/manageUsers.jsx";
import ManageItems from "./pages/ManageItems/manageItems.jsx";
const app =()=>{
    return (<div>
        <Menubar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/manageCategories" element={<ManageCategories />} />
            <Route path="/manageUsers" element={<ManageUsers />} />
            <Route path="/manageItems" element={<ManageItems />} />

        </Routes>
        </div>
    );
}
export  default app;