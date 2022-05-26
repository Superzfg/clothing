import "./button.scss"
const BUTTON_TYPE_CLASS = {
    google: "google-sign-in",
    inverted: "inverted"
}
const Button = ({ children, buttonType, ...otherProp }) => {
    return (
        <button className={`${BUTTON_TYPE_CLASS[buttonType]} button-container`}{...otherProp}>{children}</button>
    )
}
export default Button