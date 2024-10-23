import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { menu_list } from "../assets/assets";


export default function Explore_menu({category , setCategory}) {

    return (

        <>
            <div className="flex flex-col justify-center mx-auto w-10/12  my-10  " id="explore-menu">
                <div className="flex flex-col text-start max-sm:px-3 md:px-5">
                    <h1 className="text-3xl font-bold my-3 ">Explore Our Menu</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam, explicabo excepturi ducimus libero modolorem.</p>
                </div>
                <div className="my-9  grid lg:grid-cols-8 max-md:grid-cols-4  md:grid-cols-4  max-sm:grid-cols-3  mx-auto ">

                    {menu_list.map((items, index) => {
                        return (
                            <div onClick={()=> setCategory(prev =>prev === items.menu_name?"All ":items.menu_name)} key={index} className="flex flex-col justify-between menu-list gap-2 m-4 max-sm:m-3  ">
                                <img className={`${category === items.menu_name?"active":""} rounded-full`} src={items.menu_image} alt="" />
                                <p className="my-2 text-gray-500 font-bold cursor-pointer ">{items.menu_name}</p>


                            </div>)
                    })}
                </div>
                <hr className="text-gray-600 border-gray-300"/>
            </div>


        </>
    )
}