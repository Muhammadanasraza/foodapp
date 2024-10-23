import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Main from "../components/main";
import Explore_menu from "../components/explore-mune";
import { useState } from "react";
import FoodDisplay from "../components/FoodDisplay";
import Mobile_app from "../components/MobileApp";
import Contact from "../components/Contact";

export default function Home() {


  const [category, setCategory] = useState("All")

  return (


    <div className="">


      {/* Hero Section with Background Image */}
      <Main />
      <Explore_menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Contact/>
      <Mobile_app/>

    </div>
  )
}