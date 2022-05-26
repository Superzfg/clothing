import CategoryItem from "../category-item/category-item";
import "./category.scss"
const Category = ({ categories }) => {

    return categories.map((item) => {
        return <CategoryItem category={item} key={item.id} />
    })
}
export default Category;