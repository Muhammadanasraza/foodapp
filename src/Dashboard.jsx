import { Outlet } from "react-router"
import Home from "./pages/Home"
import Footer from "./components/footer"
import Header from "./components/Header"


export default function Dashboard(){

    return(


        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}