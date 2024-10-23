import { useState } from "react";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser"

export default function Contact() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    const handleToSendData = (e) => {
        e.preventDefault();

        const serviceId = "service_hrko9ga"
        const tamplateId = "template_oxjg7vd"
        const piblicKey = "Q8AnagFFwVEAj9MGa"


        const templateParams = {
            from_name: name,
            from_email: email,
            to_Name: 'Anas Raza',
            message: message,
        };

        emailjs.send(serviceId, tamplateId, templateParams, piblicKey)
            .then((response) => {
               alert('Email Send Successfully!', response);
                console.log('Email Send Successfully!', response);
                setName("")
                setEmail("")
                setEmail("")
                
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('FAILED...', error.text);
            })


    }

    return (

        <>
            {/* Contact Section with Background Image */}
            <section id="contact"
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${assets.cantact})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="container mx-auto relative z-10 py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            We're here to answer any questions you may have. Reach out to us and
                            we'll respond as soon as we can!
                        </p>
                    </div>
                    <div className="max-w-lg mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
                        <form action="#" method="POST " onSubmit={handleToSendData}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Your Name"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Your Email"
                                    required=""
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Your Message"
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}