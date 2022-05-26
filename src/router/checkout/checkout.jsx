import "./checkout.scss"
import { CartContext } from "../../context/cart-dropdown-context "
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
const Checkout = () => {
    const { cartItems, addItemsToCart, redItemsToCart } = useContext(CartContext)
    const cartTotal = cartItems.reduce((pre, item) => (pre + item.price * item.quantity), 0)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>

    )
    // redItemsToCart(item)
}
export default Checkout