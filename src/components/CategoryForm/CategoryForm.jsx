import {useContext, useEffect, useState} from "react";
import {imgs} from "../../assets/assets.js";
import toast from "react-hot-toast";
import {addCategory} from "../../service/CategoryService.js";
import {AppContext} from "../../context/AppContext.jsx";
const CategoryForm =()=>{
    const {setCategories,categories}=useContext(AppContext);
    const [loading,setLoading]=useState(false);
    const[image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        bgColor:"#2c2c2c"
    });
    useEffect(() => {
            console.log(data)
    }, [data]);

    const onChangeHandler= (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }
    const onSubmitHandler=(async (e)=>{
        e.preventDefault();
        if(!image){
            toast.error("select img for category");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("category",JSON.stringify(data));
        formData.append("file",image);
        try{
            const response=await addCategory(formData);
            if(response.status === 201){
                setCategories([...categories,response.data]);
                toast.success("category added");
                setData({
                    name: '',
                    description: '',
                    bgColor: '#2c2c2c',
                });
                setImage(false);
            }else{
                toast.error("category not added");
            }

        }catch (e){
           toast.error(e.message);
        }finally {
            setLoading(false);

        }

    })
    return (
     <div className="mx-2 mt-2">
         <div className="row">
            <div className="card col-md-12 form-container">
                <div className="card-body">
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">
                                <img src={image ? URL.createObjectURL(image) : imgs.upload} alt="" width={48} />
                            </label>
                            <input type="file" name="image" id="image" className='form-control' hidden onChange={e=>setImage(e.target.files[0])} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Category Name" onChange={onChangeHandler} value={data.name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discription" className="form-label">Description</label>
                            <textarea rows="5" name="description" id="discribtion" className="form-control" placeholder="Write content here..." onChange={onChangeHandler} value={data.description}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bgcolor" className="form-label">Background color</label>
                            <br/>
                            <input type="color" name="bgColor" id="bgcolor"  placeholder="#ffffff" onChange={onChangeHandler} value={data.bgColor}/>
                        </div>
                        <button type="submit" disabled={loading}  className="btn btn-warning primary w-100">{loading?"Loading...":"submit"}</button>


                    </form>

                </div>
            </div>
         </div>
     </div>
    )
}

export default CategoryForm;