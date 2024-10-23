import { useContext} from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../Context/Context"


export default function FoodItem({ id, image, description, price, name, category }) {



    const { cartItem,addToCart,removeToCart } = useContext(StoreContext)

    return (

        <>

            <div className=" rounded-2xl my-6 h-96 transition">
                <div className="border w-full rounded-2xl shadow  transition-transform   hover:shadow-xl">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-cover rounded-b-none rounded-2xl object-center w-full h-full block"
                            src={
                                image
                            }
                        />
                    </a>
                    <div className="mt-6  ">

                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            {category}
                        </h3>
                        <div className="flex justify-between px-6">

                            <h2 className="text-gray-900  title-font text-lg font-medium">
                                {name}
                            </h2>
                            <img
                                alt="ecommerce"
                                className="py-2 object-cover object-center w-20 block"
                                src={
                                    assets.rating_starts
                                }
                            />
                        </div>
                        <p className="text-gray-400 text-start px-6 mt-1">{description}</p>
                        <div className="flex justify-between py-3 ">

                            <p className="mt-1 pb-2 text-start px-6  text-orange-500 font-bold text-2xl ">${price}</p>

                            {!cartItem[id]

                                ? <button onClick={() => addToCart(id)} className="  text-black-500 hover:text-orange-500 bg-orange-200 font-semibold rounded-full border px-2 mx-6   " >Buy Now</button>

                                :

                                <div className="flex gap-2 px-2   m-2">

                                    <img onClick={() => removeToCart(id)} src={assets.remove_icon_red} alt="" />
                                    <p className="py-1 font-bold">{cartItem[id]}</p>
                                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}