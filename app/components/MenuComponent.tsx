"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react"
import { Checkbox } from "@radix-ui/react-checkbox";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuComponent() {
    const [products, setProd] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/menu/get-menu")
            .then((res) => res.json())
            .then((data) => {
                if (data["categories"]) {
                    setCategories(data["categories"]);
                    console.log(categories)
                }
                if (data["product"]) {
                    setProd(data["product"]);
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
                        <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500]">Menu</p>
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

                <div className="px-5 pb-5 md:h-[30%] h-full mt-8">
                    <div className="top flex justify-between">
                        <div className="left">
                            <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500] text-white">Categories</p>
                        </div>
                        <div className="right">
                            <Button className='flex flex-col p-6 bg-[#FAC1D9] text-black'>
                                Add new category
                            </Button>
                        </div>
                    </div>
                    <div className="bottom flex-grow mt-2 h-[146px] mt-5">
                        <div className="cards grid md:grid-cols-7 grid-cols-2 gap-6 h-full">
                            {categories.map((category, index) => (
                                <div key={index} className={`card  ${category.name =="All" ? 'bg-[#FAC1D9]' : 'bg-[#292C2D]'} rounded-xl flex flex-col justify-between`}>
                                    <div className="top flex justify-end mt-3 me-3">
                                        <img src={`images/icons/${category.image}`} alt="" />
                                    </div>
                                    <div className="bottom text-white pb-0 ms-3 mb-2">
                                        <p className={`text-[16px] md:text-[25px] font-[Poppins] font-[500] ${category.name =="All" ? 'text-[#333333]' : 'text-white'}  `} >{category.name}</p>
                                        <p className={`text-[16px] md:text-[25px] font-[Poppins] font-[500] ${category.name =="All" ? 'text-[#333333]' : 'text-white'}  `} >{category.wty}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="special px-5 h-[5%] lg:-mt-10 mt-[300px]">
                    <p className="text-[25px] font-[Poppins] font-[500] text-white">
                        Special menu of all items
                    </p>
                </div>

                <div className="special px-5 h-[5%] flex flex-col lg:flex-row justify-between mt-5">
                    <div className="left text-[12px] md:text-[16px] font-[Poppins] font-[500] text-white grid lg:grid-cols-4 grid-cols-2 w-[60%] lg:gap-5 gap-x-10 gap-y-5">
                        <Button className='p-0 bg-[#FAC1D9] text-black'>
                            Normal Menu
                        </Button>
                        <Button variant="ghost" className='text-white'>
                            Special Deals
                        </Button>
                        <Button variant="ghost" className='text-white'>
                            New Year Special
                        </Button>
                        <Button variant="ghost" className='text-white'>
                            Deserts and Drinks
                        </Button>
                    </div>
                    <div className="right lg:mt-0 mt-3 lg:mb-0">
                        <Button className='bg-[#FAC1D9] text-black'>
                            Add Menu Item
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col flex-grow h-[900px] lg:mt-0 mt-20">
                    <Card className="bg-[#111315] border-0 text-white mt-3 overflow-y-auto">
                        <CardContent>
                            <Table className="w-full text-center overflow-y-auto">
                                <TableHeader>
                                    <TableRow className="text-center md:text-[14px] font-[Poppins] font-[500] text-white">
                                        <TableHead className="text-center">
                                            <Checkbox className="border border-white size-3" />
                                        </TableHead>
                                        <TableHead className="text-center text-white">Product</TableHead>
                                        <TableHead className="text-center  text-white  w-[20%]">Product Name</TableHead>
                                        <TableHead className="text-center text-white">Item ID</TableHead>
                                        <TableHead className="text-center text-white">Stock</TableHead>
                                        <TableHead className="text-center text-white">Category</TableHead>
                                        <TableHead className="text-center text-white">Price</TableHead>
                                        <TableHead className="text-center text-white">Availability</TableHead>
                                        <TableHead className="text-center text-white">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product, index) => (
                                        <TableRow key={index} className={`bg-[#292C2D] md:text-[14px] font-[Poppins] font-[400] text-white text-center ${index % 2 == 0 ? 'bg-[#292C2D]' : 'bg-[#3D4142]'}`}>
                                            <TableCell className="text-center text-white">
                                                <Checkbox id="terms" className="border border-white size-3" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <img src={`/images/icons/${product.image}`} alt={product.name} className="w-12 h-12 rounded mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-start">
                                                <div>{product.name}</div>
                                                <div className="text-gray-400 text-sm">{product.description}</div>
                                            </TableCell>
                                            <TableCell className="text-center">{product.id}</TableCell>
                                            <TableCell className="text-center">{product.stock}</TableCell>
                                            <TableCell className="text-center">{product.category}</TableCell>
                                            <TableCell className="text-center">{product.price}</TableCell>
                                            <TableCell className="text-red-400 text-center">{product.availability}</TableCell>
                                            <TableCell className="flex space-x-2 justify-center items-center align-center h-16">
                                                <div className="flex space-x-2">
                                                    <Pencil className="w-5 h-5 cursor-pointer text-gray-400 text-[white]" />
                                                    <Trash2 className="w-5 h-5 cursor-pointer text-red-500" />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}