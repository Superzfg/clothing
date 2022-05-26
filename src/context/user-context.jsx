import { useState, useEffect, createContext } from "react"
import { onAuthStateChangedListener, cerateUserDocumentFromAuth } from "../utils/firebase.js"
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    useEffect(() => {
        const uncubscribe = onAuthStateChangedListener((user) => {
            if (user) cerateUserDocumentFromAuth(user);
            setCurrentUser(user)
            return uncubscribe
        })
    }, [])
    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}