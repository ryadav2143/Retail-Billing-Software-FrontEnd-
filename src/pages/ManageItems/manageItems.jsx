import './manageItems.css'
import ItemForm from "../../components/ItemForm/ItemForm.jsx";
import ItemsList from "../../components/ItemsList/ItemsList.jsx";
const ManageItems = () => {
    return(
        <div className="items-container text-light">
            <div className="left-column">
                <ItemForm />
            </div>
            <div className="right-column">
                <ItemsList />
            </div>
        </div>
    )
}

export default ManageItems;