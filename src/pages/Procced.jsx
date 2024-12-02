import { useContext, useState } from "react"
import { StoreContext } from "../Context/Context"
import { Link, useNavigate } from "react-router-dom"
import emailjs from "@emailjs/browser"

export default function Procced() {

    const { getTotalCartAmount } = useContext(StoreContext)


    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [subTotal, setSubTotal] = useState("");
    const [dCharges, setDCharges] = useState("");
    const [total, setTotal] = useState("");




    const handleToSendData = (e) => {
        e.preventDefault();

        const serviceId = "service_6ohhz59"
        const tamplateId = "template_h94f0vo"
        const piblicKey = "Q8AnagFFwVEAj9MGa"


        const templateParams = {
            from_name: name,
            from_email: email,
            from_Last_name: lastName,
            number: number,
            address: address,
            city: city,
            state: state,
            zip: zip,
            subTotal: subTotal,
            dCharges: dCharges,
            total: total,
            to_Name: 'Anas Raza',

        };

        emailjs.send(serviceId, tamplateId, templateParams, piblicKey)
            .then((response) => {
                alert('Order Confirmed!', response);
                console.log('Email Send Successfully!', response);
                setName("")
                setEmail("")

                setLastName('')
                setNumber("")
                setAddress("")
                setCity("")
                setState("")
                setZip("")
                setEmail("")
                setSubTotal("")
                setDCharges("")
                setTotal("")



            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('FAILED...', error.text);
            })
        navigate("/")
    }



    return (


        <>

            <div className="font-[sans-serif] container mx-auto  bg-white ">
                <div className="flex justify-center  max-sm:flex-col gap-12 max-lg:gap-4 ">

                    <div className="max-w-1xl w-full h-max rounded-md  py-8 sticky top-0">
                        <h2 className="text-3xl flex justify-center mx-auto border-b-4  w-96 font-bold text-gray-800">Complete your order</h2>
                        <form className="mt-8 px-3" onSubmit={handleToSendData}>
                            <div>
                                <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            placeholder="First Name"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setLastName(e.target.value)}
                                            type="text"
                                            placeholder="Last Name"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Email"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setNumber(e.target.value)}
                                            type="number"
                                            placeholder="Phone No."
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            onChange={(e) => setAddress(e.target.value)}
                                            type="text"
                                            placeholder="Address Line"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setCity(e.target.value)}
                                            type="text"
                                            placeholder="City"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setState(e.target.value)}
                                            type="text"
                                            placeholder="State"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) => setZip(e.target.value)}
                                            type="text"
                                            placeholder="Zip Code"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 max-md:flex-col mt-8">
                                    <button
                                        type="button"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-orange-400 text-black hover:text-white hover:bg-orange-500 "
                                    >
                                        Complete Purchase
                                    </button>
                                </div>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="bg-gray-50 rounded-xl mx-auto   justify-center p-3 w-screen  mb-8 max-lg:max-w-xl ">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 onChange={(e) => setSubTotal(e.target.value)} className="font-semibold text-xl leading-8 text-gray-900">
                            ${getTotalCartAmount()}
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">
                            Delivery Charge
                        </p>
                        <h6 onChange={(e) => setDCharges(e.target.value)}  className="font-semibold text-xl leading-8 text-gray-900">
                            ${getTotalCartAmount() === 0 ? 0 : 2}
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                            Total
                        </p>
                        <h6 onChange={(e) => setTotal(e.target.value)}  className="font-manrope font-medium text-2xl leading-9 text-orange-500">
                            ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                        </h6>
                    </div>
                </div>
            </div>


        </>
    )
}