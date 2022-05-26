import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import "./navigation.scss"
import { UserContext } from "../../context/user-context";
import { useContext } from "react"
import { signOutAuth } from "../../utils/firebase.js"
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const signOutHandle = async () => {
        await signOutAuth();
    }
    return (
        <Fragment>

            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? <span onClick={signOutHandle}>Sign-Out</span> : (<Link className="nav-link" to="/auth">
                        Sign-In
                    </Link>)}
                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation