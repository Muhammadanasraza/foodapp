import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/Context";





export default function AddToCArt() {



    const {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeToCart,
        getTotalCartAmount } = useContext(StoreContext)


    return (


        <>
            <section className="py-16 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="title  font-manrope border-b-4  w-72  mx-auto  font-bold text-4xl leading-10 mt-0 mb-8 text-center text-black">
                        Shopping Cart
                    </h2>

                    <div className="hidden lg:grid grid-cols-2 py-6">
                        <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                        <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                            <span className="w-full max-w-[200px] text-center">
                                Delivery Charge
                            </span>
                            <span className="w-full max-w-[260px] text-center">Quantity</span>
                            <span className="w-full max-w-[200px] text-center">Total</span>
                        </p>
                    </div>
                    {food_list.map((item, index) => {
                        if (cartItem[item._id] > 0) {
                            return (

                                <div key={index}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">

                                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                            <div className="img-box">
                                                <img
                                                    src={item.image}
                                                    alt="perfume bottle image"
                                                    className="xl:w-[140px] rounded-xl object-cover"
                                                />
                                            </div>
                                            <div className="pro-data w-full max-w-sm ">
                                                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                                    {item.name}
                                                </h5>
                                                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                                    {item.category}
                                                </p>
                                                <h6 className="font-medium text-lg leading-8 text-orange-500  max-[550px]:text-center">
                                                    ${item.price}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                            <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                                                ${getTotalCartAmount()=== 0?"0":2}
                                                <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                                                    (Delivery Charge)
                                                </span>
                                            </h6>
                                            <div className="flex items-center w-full mx-auto justify-center">
                                                <button onClick={() => removeToCart(item._id)} className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                                    <svg
                                                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M16.5 11H5.5"
                                                            stroke=""
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                        <path
                                                            d="M16.5 11H5.5"
                                                            stroke=""
                                                            strokeOpacity="0.2"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                        <path
                                                            d="M16.5 11H5.5"
                                                            stroke=""
                                                            strokeOpacity="0.2"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </button>
                                                <p
                                                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                                >

                                                    {cartItem[item._id]}
                                                </p>

                                                <button onClick={() => addToCart(item._id)} className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                                    <svg
                                                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={22}
                                                        height={22}
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M11 5.5V16.5M16.5 11H5.5"
                                                            stroke=""
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                        <path
                                                            d="M11 5.5V16.5M16.5 11H5.5"
                                                            stroke=""
                                                            strokeOpacity="0.2"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                        <path
                                                            d="M11 5.5V16.5M16.5 11H5.5"
                                                            stroke=""
                                                            strokeOpacity="0.2"
                                                            strokeWidth="1.6"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <h6 className="text-orange-500 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                                ${item.price * cartItem[item._id]}
                                            </h6>
                                        </div>
                                    </div>





                                </div>
                            )
                        }


                    })}
                        <div>
                            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                                <div className="flex items-center justify-between w-full mb-6">
                                    <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                                    <h6 className="font-semibold text-xl leading-8 text-gray-900">
                                        ${getTotalCartAmount()}
                                    </h6>
                                </div>
                                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                                    <p className="font-normal text-xl leading-8 text-gray-400">
                                        Delivery Charge
                                    </p>
                                    <h6 className="font-semibold text-xl leading-8 text-gray-900">
                                        ${getTotalCartAmount()=== 0?0:2}
                                    </h6>
                                </div>
                                <div className="flex items-center justify-between w-full py-6">
                                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                                        Total
                                    </p>
                                    <h6 className="font-manrope font-medium text-2xl leading-9 text-orange-500">
                                        ${getTotalCartAmount()===0?0:getTotalCartAmount()+5}
                                    </h6>
                                </div>
                            </div>
                            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">

                                <Link to={"/procced"} className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-orange-300  text-black hover:bg-orange-500 hover:text-white font-semibold text-lg flex transition-all duration-500 " >
                                    Continue to Payment
                                    <svg
                                        className="ml-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={23}
                                        height={22}
                                        viewBox="0 0 23 22"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                </div>
            </section>


        </>
    )
}