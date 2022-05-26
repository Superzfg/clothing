import "./category.route.scss"
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { CategoriesContext } from "../../context/category-context"
import ProductCard from "../../components/product-card/product-card"
const CategoryRouter = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [product, setProduct] = useState([]);
    console.log(categoriesMap, category)
    useEffect(() => {
        setProduct(categoriesMap[category.toLocaleLowerCase()])
    }, [category, categoriesMap])
    console.log(product)
    return (
        <>
            <h2 className="category-router-title">{category}</h2>
            <div className="category-router-container">
                {product && product.map(item => <ProductCard key={item.id} product={item}></ProductCard>)}
            </div>
        </>
    )
}
export default CategoryRouter