import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";



export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {


    const [cartItem, setCartItem] = useState([]);
    // useEffect(() => {
    //   const item = localStorage.getItem("cartItem");
    //   if (item) {
    //     setCartItem([...JSON.parse(item)]);
    //   }
    //   setIsLoaded(false);
    // }, []);
  
    // useEffect(() => {
    //   if (!isLoaded) {
    //     localStorage.setItem("cartItem", JSON.stringify(cartItem));
    //     setIsLoaded(false)
    //   }
    // }, [cartItem]);
   
    // const [isLoaded, setIsLoaded] = useState(true);
  


    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {

            setCartItem((prev) => ({ ...prev, [itemId]: 1 })
            )
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }


    const removeToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {

        let totalAmount = 0;
        for (const item in cartItem) {

            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((products) => products._id === item);
                totalAmount += itemInfo.price * cartItem[item]
            }

        }
        return totalAmount;
    }

    const ContextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeToCart,
        getTotalCartAmount

    }
    return (

        <StoreContext.Provider value={ContextValue}>

            {props.children}

        </StoreContext.Provider>
    )



}
export default StoreContextProvider;