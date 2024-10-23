import { useContext } from "react"
import { StoreContext } from "../Context/Context"

import FoodItem from "./FoodItem"

const  FoodDisplay = ({ category }) => {


    const { food_list } = useContext(StoreContext);


    return (


        <div className=" w-10/12 mx-auto transition">
            <div className="flex flex-col text-start mx-auto max-sm:px-2 md:px-5">
                <a href="#explore-menu" className="text-3xl font-bold my-3 ">Food Display</a>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam, explicabo excepturi ducimus libero modolorem.</p>
            </div>
            <div className="food-display   my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 ">

                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        
                        return <FoodItem key={index} id={item._id} name={item.name} category={item.category} price={item.price} image={item.image} description={item.description} />
                        
                    }
                    
                })}
            </div>



        </div>
    )
}
export default FoodDisplay;