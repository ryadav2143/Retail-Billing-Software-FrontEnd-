import {createContext, useEffect, useState} from "react";
import {fetchCategory} from "../service/CategoryService.js";
import {fetchItems} from "../service/ItemService.js";
export const AppContext=createContext(null);
export const AppContextProvider=(props)=>{
    const [categories,setCategories]=useState([]);
    const [auth,setAuth]=useState({token:null,role:null});
    const [itemData, setItemData]=useState([]);
    useEffect(() => {
        async function loadData(){
         const response=  await fetchCategory();
         const itemResponse =await fetchItems();
         setCategories(response.data);
          setItemData(itemResponse.data);
        }
        loadData();
    }, []);

    const setAuthData=(token,role)=>{
        setAuth({token,role});
    }
    const contextValue={
        categories,
        setCategories,
        auth,
        setAuthData,
        itemData,
        setItemData,

    }

return <AppContext.Provider value={contextValue}>
    {props.children}
    </AppContext.Provider>

}