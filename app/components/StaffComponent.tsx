"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react"
import { Checkbox } from "@radix-ui/react-checkbox";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function staffsComponent() {

    const[staffs, setStaff] = useState([]);
    const[attnds, setAttnd] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5010/staff')
        .then((res) => res.json())
            .then((data) => {
                if (data["staff-details"]) {
                    setStaff(data["staff-details"]);
                }
                if(data["attnd-details"]){
                    setAttnd(data["attnd-details"])
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
                        <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500]">Staff Management</p>
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
                            <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500] text-white">Staff (22)</p>
                        </div>
                        <div className="right flex gap-5">
                            <Button className='flex flex-col text-[16px] font-[Poppins] font-[500] p-6 bg-[#FAC1D9] text-black'>
                                Add Staff
                            </Button>
                            <Button className='flex p-6 text-[16px] font-[Poppins] font-[500] bg-[#FAC1D9] text-black'>
                                Sort By <ChevronDown />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Tabs defaultValue="staff" className="w-full bg-[#111315]">
                        <TabsList className="grid w-full grid-cols-2 bg-[#111315] lg:w-[25%] gap-4">
                            <TabsTrigger value="staff"
                                className="py-3 px-5 data-[state=active]:bg-[#FAC1D9] data-[state=active]:text-black bg-[#111315] text-white">
                                Staff Management
                            </TabsTrigger>
                            <TabsTrigger value="attendance"
                                className="p-3 data-[state=active]:bg-[#FAC1D9] data-[state=active]:text-black bg-[#111315] text-white">
                                Attendance
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="staff">
                            <div className="flex flex-col flex-grow h-[900px] lg:mt-0 mt-20">
                                <Card className="bg-[#111315] border-0 text-white mt-3 overflow-y-auto">
                                    <CardContent>
                                        <Table className="w-full text-center overflow-y-auto">
                                            <TableHeader>
                                                <TableRow className="text-center md:text-[14px] font-[Poppins] font-[500] text-white">
                                                    <TableHead className="text-center">
                                                        <Checkbox className="border border-white size-3" />
                                                    </TableHead>
                                                    <TableHead className="text-center text-white">ID</TableHead>
                                                    <TableHead className="text-center  text-white  w-[20%]">Name</TableHead>
                                                    <TableHead className="text-center text-white">Email</TableHead>
                                                    <TableHead className="text-center text-white">Phone</TableHead>
                                                    <TableHead className="text-center text-white">Age</TableHead>
                                                    <TableHead className="text-center text-white">Salary</TableHead>
                                                    <TableHead className="text-center text-white">Timings</TableHead>
                                                    <TableHead className="text-center text-white"></TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {staffs.map((staff, index) => (
                                                    <TableRow key={index} className={`bg-[#292C2D] md:text-[14px] font-[Poppins] font-[400] text-white text-center ${index % 2 == 0 ? 'bg-[#292C2D]' : 'bg-[#3D4142]'}`}>
                                                        <TableCell className="text-center text-white">
                                                            <Checkbox id="terms" className="border border-white size-3" />
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <img src='\images\icons/face.png' alt={staff.id} className="w-10 h-10 rounded mx-auto" />
                                                        </TableCell>
                                                        <TableCell className="text-start">
                                                            <div>{staff.name}</div>
                                                            <div className="text-[#FAC1D9] text-sm">{staff.description}</div>
                                                        </TableCell>
                                                        <TableCell className="text-center">{staff.email}</TableCell>
                                                        <TableCell className="text-center">{staff.phone}</TableCell>
                                                        <TableCell className="text-center">{staff.age}</TableCell>
                                                        <TableCell className="text-center">{staff.salary}</TableCell>
                                                        <TableCell className="text-center">{staff.timings}</TableCell>
                                                        <TableCell className="flex space-x-2 justify-center items-center align-center h-16">
                                                            <div className="flex space-x-2">
                                                                <img src="/images/icons/eye.png" alt="" />
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
                        </TabsContent>

                        <TabsContent value="attendance">
                            <div className="flex flex-col flex-grow h-[1100px] lg:mt-0 mt-20">
                                <Card className="bg-[#111315] border-0 text-white mt-3 overflow-y-auto">
                                    <CardContent>
                                        <Table className="w-full text-center overflow-y-auto">
                                            <TableHeader>
                                                <TableRow className="text-center md:text-[14px] font-[Poppins] font-[500] text-white">
                                                    <TableHead className="text-center">
                                                        <Checkbox className="border border-white size-3" />
                                                    </TableHead>
                                                    <TableHead className="text-center text-white">ID</TableHead>
                                                    <TableHead className="text-center  text-white  lg:w-[30%] w-[30%]">Name</TableHead>
                                                    <TableHead className="text-center text-white">Date</TableHead>
                                                    <TableHead className="text-center text-white">Timings</TableHead>
                                                    <TableHead className="text-center text-white w-[30%] me-10">Status</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {attnds.map((attdn, index) => (
                                                    <TableRow key={index} className={`bg-[#292C2D] md:text-[14px] font-[Poppins] font-[400] text-white text-center ${index % 2 == 0 ? 'bg-[#292C2D]' : 'bg-[#3D4142]'}`}>
                                                        <TableCell className="text-center text-white">
                                                            <Checkbox id="terms" className="border border-white size-3" />
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <div>{attdn.id}</div>
                                                        </TableCell>
                                                        <TableCell className="text-start h-full flex items-center">
                                                            <div className="flex items-center space-x-4">
                                                                <img src="/images/icons/face.png" alt="" className="w-10 h-10 rounded" />
                                                                <div className="flex flex-col justify-center">
                                                                    <div>{attdn.name}</div>
                                                                    <div className="text-[#FAC1D9] text-sm">{attdn.description}</div>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-center">{attdn.date}</TableCell>
                                                        <TableCell className="text-center">{attdn.timings}</TableCell>
                                                        <TableCell className="flex space-x-2 justify-center items-center align-center h-16">
                                                            <div className="flex space-x-2">
                                                                <Button className="p-2 bg-[#FAC1D9] text-black">Present</Button>
                                                                <Button className="p-2 bg-[#FFDF6B] text-black">Absent</Button>
                                                                <Button className="p-2 bg-[#6BE4FF] text-black">Half Shift</Button>
                                                                <Button className="p-2 bg-[#FF6A6A] text-black">Leave</Button>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}