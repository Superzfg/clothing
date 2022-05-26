import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import "./cart-icon.scss"
import { CartContext } from "../../context/cart-dropdown-context "
import { useContext } from "react";
const CartIcon = () => {
    const { setAppearance, appearance, cartItems } = useContext(CartContext)
    const setApp = () => {
        setAppearance(!appearance)
    }
    const num = cartItems.reduce((pre, item) => pre + item.quantity, 0)
    return (
        <div className="cart-icon-container" onClick={setApp}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{num}</span>
        </div>
    )
}
export default CartIcon