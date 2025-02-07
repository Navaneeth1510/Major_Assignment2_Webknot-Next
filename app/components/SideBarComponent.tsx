"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import "@fontsource/poppins";
import Link from "next/link";

export default function SideBarComponent() {
    const [activeButton, setActiveButton] = useState("Dashboard");

    return (
        <div className="h-[1388px] rounded-r-2xl bg-[#292C2D] flex flex-col justify-between items-center">
            <div className="top flex flex-col items-center w-full mt-8">
                <h1 className="font-[600] text-[20px] text-[#FAC1D9] font-[Poppins] mb-4">
                    COSYPOS
                </h1>
                <div className="buttons text-[16px] text-white font-[400] font-[Poppins] flex flex-col items-center w-full">
                    <div className=" flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Link href='/dash'>
                            <Button
                                onClick={() => setActiveButton("Dashboard")}
                                className={` flex flex-col w-[117px] p-10 ${activeButton === "Dashboard" ? "bg-[#FAC1D9] text-black" : "bg-transparent text-white"
                                    }`}
                            >
                                <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />

                                Dashboard
                            </Button>
                        </Link>
                    </div>
                    <div className="flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Link href='/menu'>
                            <Button
                                onClick={() => setActiveButton("Menu")}
                                className={` flex flex-col w-[117px] p-10 ${activeButton === "Menu" ? "bg-[#FAC1D9] text-black" : "bg-transparent text-white"
                                    }`}
                            >
                                <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />

                                Menu
                            </Button>
                        </Link>
                    </div>
                    <div className="  flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Link href='/staff'>
                        <Button
                            onClick={() => setActiveButton("Staff")}
                            className={` flex flex-col w-[117px] p-10 ${activeButton === "Staff" ? "bg-[#FAC1D9] text-black" : "bg-transparent text-white"
                                }`}>
                            <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />

                            Staff
                        </Button>
                        </Link>
                    </div>
                    <div className="  flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Button
                            className="flex flex-col bg-transparent text-white w-[117px] p-10 ">
                            <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />
                            Inventory
                        </Button>
                    </div>
                    <div className="  flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Button
                            className="flex flex-col bg-transparent text-white w-[117px] p-10 ">
                            <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />
                            Reports
                        </Button>
                    </div>
                    <div className="  flex justify-center border-b border-gray-600 pb-2 pt-2">
                        <Button
                            className="flex flex-col bg-transparent text-white w-[117px] p-10 ">
                            <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />
                            Reservation
                        </Button>
                    </div>
                    <div className="  flex justify-center pb-2 pt-2 p-7">
                        <Button
                            className="flex flex-col bg-transparent text-white w-[117px] p-10 ">
                            <img src="/images/icons/menu.png" alt="nope" className="w-[30px] h-[30px]" />
                            Order/Table
                        </Button>
                    </div>                    
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center mb-5">
                <div className="flex text-white justify-center pb-2 pt-2">
                    <Button
                        className="flex flex-col bg-transparent text-white w-[117px] p-10 ">
                        <img src="/images/icons/logout.png" alt="nope" className="w-[24px] h-[24px]" />
                        Logout
                    </Button>
                </div>
            </div>
        </div>


    );
}
