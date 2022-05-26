import { useContext } from "react"
import { Fragment } from "react"
import { CategoriesContext } from "../../context/category-context"
import CategoryPreview from "../../components/category-preview/category-preview"
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap)
                .map(title => <CategoryPreview title={title} key={title} product={categoriesMap[title]} />)}
        </Fragment>
    )
}
export default CategoriesPreview