import Button from "../button/button"
import { useContext } from "react"
import { CartContext } from "../../context/cart-dropdown-context "
import "./product-card.scss"
const ProductCard = ({ product }) => {
    const { addItemsToCart } = useContext(CartContext)
    const { name, price, imageUrl } = product
    const addToCart = () => {
        addItemsToCart(product)

    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addToCart}>Add To Card</Button>
        </div>
    )
}
export default ProductCard;