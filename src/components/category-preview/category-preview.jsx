import "./category-preview.scss"
import ProductCard from "../product-card/product-card"
import { Link } from "react-router-dom"
const CategoryPreview = ({ title, product }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={title} className="title">{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    product.filter((_, index) => index < 4).map(item => <ProductCard key={item.id} product={item}></ProductCard>)
                }
            </div>
        </div>
    )
}
export default CategoryPreview