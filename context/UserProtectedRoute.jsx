import { Navigate, useLocation } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "./AuthContext";
import { CreateUserDatabaseContext } from "./UserDbContext";

 const UserProtectedRoutes = ({children})=>{
const {currentUser}= useContext(AuthContext)
const {userRole} = useContext(CreateUserDatabaseContext)
const location = useLocation();
console.log(userRole)
   if (currentUser &&  userRole === 'user'){
    return children;
  

    }
    return <Navigate to="/login" state={{path: location.pathname}}/>
    
};
export default UserProtectedRoutes