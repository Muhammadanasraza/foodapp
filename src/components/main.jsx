import { Link } from "react-router-dom";
import { assets } from "../assets/assets";



export default function Main() {

    return (
        <>
            <section
                className="relative my-7 h-full bg-cover bg-center max-sm:w-11/12   w-10/12 mx-auto rounded-xl bg-no-repeat"
                style={{ backgroundImage: `url(${assets.imageForMain})` }}
            >
                <div className="absolute inset-0  bg-opacity-50" />
                <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-12 px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Order your favourite food here
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 ">
                        We create amazing experiences that will take your business to the next
                        level.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#explore-menu"

                            className="bg-orange-300 transition text-black hover:bg-orange-500 hover:text-white    px-6 py-3 rounded-full text-lg font-medium"
                        >
                                View Menu
                        </a>

                    </div>
                </div>
            </section>
        </>
    )
}