import { createContext, useEffect, useState } from "react";
import { userApi } from "../api/userApi";

export const UserContext = createContext(null)

const UserContextProvider = (props) => {
    const [users,setUsers] = useState([])
    const [filteredUsers,setFilteredUsers] = useState([])

    const fetchUsers = async() => {
        const response = await userApi.get()
        console.log(response.data)
        setUsers(response.data)
        setFilteredUsers(response.data)
    }

    useEffect(() => {
        fetchUsers()
    },[])
    const value = {users,setUsers,filteredUsers,setFilteredUsers}
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;