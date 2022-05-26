import Button from "../button/button"
import "./cart-dropdown.scss"
import { CartContext } from "../../context/cart-dropdown-context "
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item";
const CartDropdown = () => {
    const router = useNavigate();
    const link = () => {
        router("/checkout")
    }

    const { appearance, cartItems } = useContext(CartContext)

    return (
        appearance ? (<div className="cart-dropdown-container">
            <div className="cart-items"  >
                {cartItems.length ? cartItems.map(item => (<CartItem cartItem={item}></CartItem>)) : <h2 style={{ textAlign: "center", lineHeight: 5 }}>Your cart is emptey</h2>}
            </div>
            <Button onClick={link}>GO TO CHECKOUT</Button>
        </div>) : null
    )
}
export default CartDropdown