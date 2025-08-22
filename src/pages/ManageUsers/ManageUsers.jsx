import './manageUsers.css'
import UserForm from "../../components/UserForm/UserForm.jsx";
import UsersList from "../../components/UsersList/UsersList.jsx";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {fetchUser} from "../../service/UserService.js";
const manageUsers = () => {

    const[users,setUsers] =useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadUsers(){
            try{
                setLoading(true);
                const response=await fetchUser();
                setUsers(response.data);
            }catch (error){
                console.error(error);
                toast.error("unable to fetch users");
            }finally {
                setLoading(false);
            }
        }
loadUsers() ;
    }, []);
    return (
        <div className="users-container text-light">
            <div className="left-column">
                <UserForm setUsers={setUsers}/>
            </div>
            <div className="right-column">
                <UsersList users={users} setUsers={setUsers}/>
            </div>
        </div>    )
}

export default manageUsers;