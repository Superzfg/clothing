import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase"
export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap1 = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap1)
        }
        getCategoriesMap();
    }, [])
    const value = { categoriesMap };
    return (
        < CategoriesContext.Provider value={value}>{children}</ CategoriesContext.Provider>

    )
}