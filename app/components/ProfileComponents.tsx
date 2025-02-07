import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfileComponent() {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="p-7 mt-5 bg-[#111315] text-white h-auto flex justify-between w-full">
                    <div className="dashboard w-[28%] md:w-[90%] flex">
                        <div className="flex justify-center items-center px-3 rounded-3xl bg-[#292C2D] me-4">
                            <FontAwesomeIcon icon={faAngleLeft} className="h-[20px] w-[20px]" />
                        </div>
                        <p className="text-[20px] md:text-[25px] font-[Poppins] font-[500]">Profile</p>
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


                <div className="p-7 flex gap-5 lg:flex-row flex-col ">
                    <div className="left lg:w-[20%] w-[100%] bg-[#292C2D] h-[22%] flex bg-[#292C2D] rounded-[10px] flex flex-col p-5 gap-3">
                        <Button className="bg-[#FAC1D9] text-black flex justify-start items-center">
                            <img src="/images/icons/user.png" alt="" className="w-5 h-5" />
                            My Profile
                        </Button>
                        <Button variant="ghost" className="text-white flex justify-start items-center">
                            <img src="/images/icons/setting.png" alt="" className="w-5 h-5" />
                            Manage access
                        </Button>
                        <Button variant="ghost" className="text-white flex justify-start items-center">
                            <img src="/images/icons/logout2.png" alt="" className="w-5 h-5" />
                            Logout
                        </Button>
                    </div>

                    <div className="right lg:w-[80%] flex-grow rounded-[10px]  flex-col bg-[#292C2D] p-6">
                        <div className="top">
                            <p className="text-[25px] font-[Poppins] text-[500] text-white">Personal Information</p>
                        </div>
                        <div className="picture flex items-center mt-5">
                            <div className="left flex ">
                                <img src="/images/background/dp.png" alt="" />
                                <div className="flex flex-col items-end justify-end">
                                <img src="/images/background/pen.png" alt="" className="h-[30px] w-[30px]" />
                                </div>
                            </div>
                            <div className="right h-full ">
                                <p className="text-[25px] font-[Poppins] text-[500] text-white">John Doe</p>
                                <p className="text-[16px] font-[Poppins] text-[300] text-[#FAC1D9]">Manager</p>
                            </div>  
                        </div>
                        <div className="form-part flex-col mt-5">
                            <form className="flex flex-col">   
                                <label htmlFor="First Namw" className="text-white text-[16px] font-[500] font-[Poppins]">First Name</label>
                                <input type='text' className='bg-[#3D4142] text-white  text-[16px] font-[300] font-[Poppins] p-5 rounded-[10px] mt-3' placeholder="John Doe" />

                                <label htmlFor="Email" className="text-white text-[16px] font-[500] font-[Poppins] mt-5">Email</label>
                                <input type="text" className='bg-[#3D4142] text-white  text-[16px] font-[300] font-[Poppins] p-5 rounded-[10px] mt-3' placeholder="johndoe123@gmail.com"/>

                                <label htmlFor="Address" className="text-white text-[16px] font-[500] font-[Poppins] mt-5">Address</label>
                                <input type="text" className='bg-[#3D4142] text-white  text-[16px] font-[300] font-[Poppins] p-5 rounded-[10px] mt-3' placeholder="123 Street USA, Chicago"/>
                                <div className="flex w-full lg:flex-row flex-col justify-between mt-5">
                                    <div className="left flex flex-col lg:w-[48%]">
                                        <label htmlFor="First Namw" className="text-white text-[16px] font-[500] font-[Poppins]">New Password</label>
                                        <input type="text" className='bg-[#3D4142] text-white  text-[16px] font-[300] font-[Poppins] p-5 rounded-[10px] mt-3' placeholder=""/>
                                    </div>
                                    <div className="flex flex-col lg:w-[48%] lg:mt-0 mt-5">
                                        <label htmlFor="First Namw" className="text-white text-[16px] font-[500] font-[Poppins]">Confirm Password</label>
                                        <input type="text" className='bg-[#3D4142] text-white  text-[16px] font-[300] font-[Poppins] p-5 rounded-[10px] mt-3' placeholder="********"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="buttons flex lg:justify-end justify-center items-center mt-5">
                            <div className="lg:w-[40%] gap-5 justify-between flex lg:flex-row flex-col">
                                <Button variant="ghost" className="underline-offset-2 text-white p-7 text-[16px] font-[500] font-[Poppins]">Discard Changes</Button>
                                <Button className="text-underline text-white text-[16px] font-[500] font-[Poppins] p-7 bg-[#FAC1D9] text-black " >Save Changes</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}