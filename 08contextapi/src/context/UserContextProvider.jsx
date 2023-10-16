import React  from "react";

import UserContext from "./UserContext";


const UserContextProvider =({children})=>{

    const [user,setuser]= React.useState(null)


    return(
        // importing usercontex to provider 
    <UserContext.Provider value={{user,setuser}}>
        {children}
    </UserContext.Provider>
    )


}
export default UserContextProvider;

// now the flows goes to file app.jsx