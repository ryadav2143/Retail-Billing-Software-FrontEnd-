import './manageCategories.css'
import CategoryForm from "../../components/CategoryForm/CategoryForm.jsx";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";

const ManageCategories = () => {
    return (
        <div className="category-container text-light">
            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
        </div>
    )
}

export default ManageCategories;