import { useState, createContext, useContext } from "react";

export let SessionContext = createContext(null)

export let SessionProvider = ({children})=>{
    const [sessions, setSessions] = useState([])
    return <SessionContext.Provider value={{sessions, setSessions}}>{children}</SessionContext.Provider>
}