import { Navigate, useLocation } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "./AuthContext";
import { CreateUserDatabaseContext } from "./UserDbContext";

 const DoctorProtectedRoutes = ({children})=>{
const {currentUser}= useContext(AuthContext)
const {userRole} = useContext(CreateUserDatabaseContext)

const location = useLocation();
   if (currentUser && userRole === 'doctor'){
    return children;

    }
    return <Navigate to="/login" state={{path: location.pathname}}/>  
};
export default DoctorProtectedRoutes