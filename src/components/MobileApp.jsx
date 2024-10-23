import { assets } from "../assets/assets";

export default function Mobile_app() {


    return (
        <>
            <div className="my-16 "id="mobile-app">
                <div>

                <p className="text-4xl font-bold ">
                    For Better Experience Download
                </p>
                <p className="text-4xl font-bold py-3 ">
                    Food Hub App
                </p>
                <div className="flex w-96 justify-between my-16 mx-auto ">
                    <img className="w-36  transition"  src={assets.play_store} alt="" />
                    <img className="w-36" width={150} src={assets.app_store}alt="" />
                </div>
                </div>
            </div>


        </>
    )
}