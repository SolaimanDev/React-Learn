import { useContext } from "react"
import { BooksContext } from "../components/Context/BooksContext"

export const useBooksContext=()=>{
    return useContext(BooksContext);
} 