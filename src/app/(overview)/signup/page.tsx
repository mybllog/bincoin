"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";




/*import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeSlashIcon,
  EyeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";*/
//import { FaGoogle, FaFacebook } from "react-icons/fa";
import logo from "../../../../public/Images/Logo.png";
import { useContext, useState } from "react";

//import { useAuth } from "@/context/AuthContext";
//import { Loader2 } from "lucide-react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

 /* const {
    firstname,
    setFirstName,
    lastname,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    registerUser,
    isLoading,
  } = useAuth();*/

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#EAEFF0]">
      
      <div className=" border border-white px-10 py-10 rounded-xl bg-white ">
        <div className=" justify-start text-start">
          <h1 className=" font-bold text-2xl">Create an account</h1>
          <p className=" text-gray-400">Register to continue with Hyiprio</p>
        </div>
         <form className=" my-11">
            <div className=" grid grid-cols-2 gap-4">
            <div className=" space-y-3">
              <div>
              <label> Name*</label>
              <input placeholder="Your First Name" required className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-grey-200 focus:bg-white focus:outline-none"></input>
              </div>
              
              <div>
              <label>Email Address*</label>
              <input placeholder=" Enter Your Email Address" required className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-grey-200 focus:bg-white focus:outline-none"></input>
              </div>
            </div>
            <div className=" space-y-3">
              <div>
              <label>Password*</label>
              <input type={showPassword?"text":"password"} placeholder="Your User Name" required className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-grey-200 focus:bg-white focus:outline-none"></input>
              </div>
              
            </div>
            
            </div>
            <div className=" flex space-x-3 my-5">
              <input type="checkbox"/>
              <p>I agree with Privacy & Policy and Terms & Condition</p>
            </div>
          <div className=" justify-center items-center text-center">
            
          <Button className=" bg-orange-400 hover:bg-pink-800 w-full rounded-full text-white">CREATE ACCOUNT</Button>
          </div>
           <div className=" text-center">
            <p>Already have an account?<Link href="/login">Login</Link></p>
           </div>
         </form>
      </div>
        </div>
    );
}
