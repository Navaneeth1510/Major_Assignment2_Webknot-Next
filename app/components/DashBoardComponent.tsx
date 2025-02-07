"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { FileDown } from "lucide-react";


import "@fontsource/poppins";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";


class TopCard {
    title: string | undefined;
    Amount: string | undefined;
    time: string | undefined;
    image: string | undefined;
}
class Popular{
    image:string | undefined;
    name:string | undefined;
    serving:string | undefined;
    stock:string | undefined;
    price:string | undefined;
}

export default function DashBoardComponent() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const [topCards, setTopCards] = useState<TopCard[]>([]);
    const [popular, setPopular] = useState<Popular[]>([]);
    const [graphsales, setSales] = useState([]);
    const [graphreveneue, setRevenue] = useState([]);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales',
                data: graphsales,
                fill: false,
                borderColor: '#FAC1D9',
                tension: 0.1,
            },
            {
                label: 'Revenue',
                data: graphreveneue,
                fill: false,
                borderColor: 'white',
                tension: 0.1,
            }
        ]
    };



    const options = {
        "plugins": {
            "legend": {
                "position": 'top' as 'top' | 'center' | 'left' | 'right' | 'bottom' | 'chartArea',
            },
            "tooltip": {
                "mode": "nearest",
                "intersect": false,
                "maintainAspectRatio": false,
            }
        }
    };


    useEffect(() => {
        fetch("http://localhost:3001/dash/get-dash")
            .then((res) => res.json())
            .then((data) => {
                if (data["top-cards"]) {
                    setTopCards(data["top-cards"]);
                }
                if(data["popular"]){
                    setPopular(data["popular"])
                }
                if(data["graph-sales"]){
                    setSales(data["graph-sales"])
                }
                if(data["graph-revenue"]){
                    setRevenue(data["graph-revenue"])
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="p-7 mt-5 bg-[#111315] text-white h-auto flex justify-between w-full">
                    <div className="dashboard w-[28%] md:w-[90%] flex">
                        <div className="flex justify-center items-center px-3 rounded-3xl bg-[#292C2D] me-4">
                            <FontAwesomeIcon icon={faAngleLeft} className="h-[20px] w-[20px]" />
                        </div>
                        <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500]">Dashboard</p>
                    </div>
                    <div className="profile flex w-[40%] lg:w-[10%] justify-center items-center">
                        <div className="profile border-e p-2 me-5">
                            <FontAwesomeIcon icon={faBell} className="h-[18px] me-5" />
                        </div>
                        <Link href='/profile'>
                            <img src="/images/icons/Profile.png" alt="Profile" className="h-[35px] w-[35px] md:h-[40px] md:w-[40px]" />
                        </Link>
                    </div>
                </div>

                <div className="top-cards py-2 px-7 lg:h-1/6 h-[300px] text-white">
                    <div className="cards h-full overflow-x-auto overflow-y-hidden whitespace-nowrap flex flex-nowrap gap-10">
                    {topCards.map((card , index)=>(
                        <div key={index} className="card flex w-full sm:w-full lg:w-[32%] sm:w-[300px] h-full rounded-[10px] w-[1000px] bg-[#292C2D] ps-4 pt-1">
                            <div className="left w-[40%] h-full flex flex-col justify-around">
                                <div>
                                    <p className="heading text-[16px] font-[Poppins] font-[300]">{card.title}</p>
                                    <p className="money text-[25px] font-[Poppins] font-[500]">{card.Amount}</p>
                                </div>
                                <p className="date text-[16px] font-[Poppins] font-[300] text-[#777979]">{card.time}</p>
                            </div>
                            <div className="right w-[60%] pt-7 lg:ms-0 ms-20 flex flex-col justify-between align-end items-end pe-5 pt-5">
                                <div className="top">
                                    <img src="/images/icons/dollar.png" alt="" className="h-[36px] w-[36px] mt-2" />
                                </div>
                                <div className="bottom">
                                    {card.image && <img src={`/images/background/${card.image}`} alt="no" />}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="popular lg:h-[33%] mb-5 lg:mb-2 h-[100%] text-white mt-5 py-2 px-7">
                    <div className="cards flex flex-col lg:flex-row pt-1 h-full lg:justify-between mb-5">
                        <div className="card p-3 px-5 py-4 pb-5 flex flex-col md:w-[48%] w-full h-auto rounded-[10px] bg-[#292C2D] overflow-y-auto lg:mb-4 mb-3 lg:mb-0">
                            <div className="headings flex justify-between items-center">
                                <p className="text-[20px] lg:text-[25px] font-[Poppins] font-[500] mb-3">Popular Dishes</p>
                                <p className="text-[14px] lg:text-[16px] font-[Poppins] font-[400] text-[#FAC1D9] underline underline-offset-1">See All</p>
                            </div>
                            <div className="contents border overflow-y-auto h-[100%]">
                                {popular.map((pop, index) => (
                                    <div key={index} className="content flex justify-between mt-2 py-1 items-center bg-[#3D4142] rounded-[8px]">
                                    <div className="left flex w-3/5 items-center">
                                        <div className="image p-2">
                                            <img src={`/images/icons/${pop.image}`} alt="Dish" className="w-[75px] h-auto" />
                                        </div>
                                        <div className="details ms-5 flex flex-col">
                                            <p className="text-[16px] lg:text-[18px] font-[Poppins] font-[500]">{pop.name}</p>
                                            <p className="text-[12px] lg:text-[14px] font-[Poppins] font-[400] text-[#777979]">{pop.serving}</p>
                                        </div>
                                    </div>
                                    <div className="status me-5 flex flex-col items-end">
                                        <p className={`text-[14px] lg:text-[16px] font-[Poppins] font-[400] ${pop.stock=="Out of Stock" ? 'text-[#F60000]' : 'text-[#FAC1D9] '}`}>{pop.stock}</p>
                                        <p>{pop.price}</p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>    

                        <div className="card p-3 px-5 py-4 pb-5 flex flex-col md:w-[48%] w-full h-auto rounded-[10px] bg-[#292C2D] overflow-y-auto lg:mb-4 mb-[-100px] lg:mb-0">
                            <div className="headings flex justify-between items-center">
                                <p className="text-[20px] lg:text-[25px] font-[Poppins] font-[500] mb-3">Popular Dishes</p>
                                <p className="text-[14px] lg:text-[16px] font-[Poppins] font-[400] text-[#FAC1D9] underline underline-offset-1">See All</p>
                            </div>
                            <div className="contents border overflow-y-auto h-[100%]">
                            {popular.map((pop, index) => (
                                    <div key={index} className="content flex justify-between mt-2 py-1 items-center bg-[#3D4142] rounded-[8px]">
                                    <div className="left flex w-3/5 items-center">
                                        <div className="image p-2">
                                            <img src={`/images/icons/${pop.image}`} alt="Dish" className="w-[75px] h-auto" />
                                        </div>
                                        <div className="details ms-5 flex flex-col">
                                            <p className="text-[16px] lg:text-[18px] font-[Poppins] font-[500]">{pop.name}</p>
                                            <p className="text-[12px] lg:text-[14px] font-[Poppins] font-[400] text-[#777979]">{pop.serving}</p>
                                        </div>
                                    </div>
                                    <div className="status me-5 flex flex-col items-end">
                                        <p className={`text-[14px] lg:text-[16px] font-[Poppins] font-[400] ${pop.stock=="Out of Stock" ? 'text-[#F60000]' : 'text-[#FAC1D9] '}`}>{pop.stock}</p>
                                        <p>{pop.price}</p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="graph px-7 text-white flex flex-col lg:h-[520px] rounded-[10px]">
                    <div className="bg-[#292C2D] h-full rounded-[10px]">
                        <div className="top lg:h-[10%] mt-3 mx-4 w-full  flex flex-col  lg:flex-row mb-10  lg:mb-0 justify-between w-[95%]  mt-2">
                            <div className="left">
                                <p className="text-[25px] font-[Poppins] font-[500]">Overview</p>
                            </div>
                            <div className="right lg:w-[30%] w-[90%] flex justify-between me-[20px]">
                                <div className="buttons flex justify-between lg:gap-4 gap-1">
                                    <Button className='bg-[#FAC1D9] text-black py-5'>
                                        Monthly
                                    </Button>
                                    <Button variant="ghost" className='text-white py-5'>
                                        Daily
                                    </Button>
                                    <Button variant="ghost" className='text-white py-5'>
                                        Weekly
                                    </Button>
                                </div>
                                <div className="export lg:mx-6 mx-0 ">
                                    <Button variant="outline" className=' bg-[#292C2D] border-[#FAC1D9] text-[#FAC1D9] py-5'>
                                        <FileDown />
                                        Export
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:h-[88%] w-full flex justify-center ">
                            <Line data={data} options={options} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
