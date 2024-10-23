import { Link } from "react-router-dom"

import * as React from 'react';
import { useState, useContext } from "react";


// icons linkimport * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Button } from "@mui/material";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/Context";
import { signOut } from "firebase/auth";
import { auth } from "../utils/auth";
import {AuthContext} from "../AuthContext/AuthContext"

export default function Header() {

    const { user, setUser } = useContext(AuthContext)


    const handleLogout = async () => {
        await signOut(auth)
    }


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },


    }));


    // ..........................
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

 
    // for app bar animation
    const [menu, setMenu] = useState("home")
    // for app bar animation






    const { getTotalCartAmount, cartItem } = useContext(StoreContext)

    return (


        <>
            <nav className="bg-white border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={assets.logo_1}
                            className="h-12"
                            alt="logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Food Hub
                        </span>
                    </a>
                    <div className="flex items-center justify-between md:order-2 space-x-5 md:space-x-5  rtl:space-x-reverse">
                        <div>
                            <Link to={"/addtocart"}>
                                <IconButton className="" aria-label="cart">
                                    <StyledBadge className={getTotalCartAmount() === 0 ? "" : "dote"} color="primary">
                                        <ShoppingCartIcon sx={{ fontSize: 30 }} />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </div>
                        <div className="">

                            {
                                user?.islogin ?
                                    <div className="menu">

                                        <Link to={"#"}>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <Avatar src={user?.userInfo.photoUrl} sx={{ fontSize: 30 }} />
                                            </Button>
                                        </Link>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <Link to={"#"}>
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            </Link>

                                            <Link to={"#"}>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                            </Link>
                                            {user.islogin ?

                                                <Link to={"#"}>
                                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                                </Link> : ""
                                            }
                                        </Menu>
                                    </div> :
                                    (

                                        <Link to={"/auth/signup"}>
                                            <Button variant="outlined" className="">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    )
                            }


                        </div>


                    </div>
                    <div
                        className="items-center navbar justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-col navbar font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li >
                                <Link to={"/home"}

                                    onClick={() => setMenu("home")}
                                    href="#"
                                    className={`${menu === "home" ? "active" : ""} block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href={"#explore-menu"}
                                    onClick={() => setMenu("menu")}

                                    className={`${menu === "menu" ? "active" : ""} block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#mobile-app"
                                    onClick={() => setMenu("mobile-app")}

                                    className={`${menu === "mobile-app" ? "active" : ""} block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Mobile App
                                </a>
                            </li>
                            {/* {
                                user?.islogin? 
                            <li>
                                <Link to={"/additem"}
                                    

                                    className={`${menu === "menu" ? "active" : ""} block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    AddItem
                                </Link>
                            </li>:
                            ""
                            } */}
                            <li>
                                <a
                                    onClick={() => setMenu("contact")}
                                    href="#contact"
                                    className={`${menu === "contact" ? "active" : ""} block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>




        </>
    )
}

