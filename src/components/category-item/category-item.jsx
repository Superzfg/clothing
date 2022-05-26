
import "./category-item.scss"
import { useNavigate } from "react-router-dom"
const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category
    const nav = useNavigate();
    const navHandle = () => {
        nav(`shop/${title}`)
    }
    return (

        <div className="category-container" onClick={navHandle} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Buy Now!</p>
            </div>
        </div>)

}
export default CategoryItem;