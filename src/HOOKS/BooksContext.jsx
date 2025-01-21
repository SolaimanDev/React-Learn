import { useContext } from "react"
import { UsersContext } from "../components/Context/UsersContext"

export const useBooksContext=()=>{
    return useContext(UsersContext);
} 