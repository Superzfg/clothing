import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import "./shop.scss"
import CategoryRouter from "../category.route/category.route";
const Shop = () => {


    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<CategoryRouter />}></Route>
        </Routes>
    )
}
export default Shop