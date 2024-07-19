/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

//import { Input } from "@/components/ui/input";
import { Button } from "@mui/material";
/*import {
  LockClosedIcon,
  EyeSlashIcon,
  EyeIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";*/
//import { FaGoogle, FaFacebook } from "react-icons/fa";
//import { useToast } from "@/components/ui/use-toast";
//import { useAuth } from "@/context/AuthContext";
//import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //const router = useRouter();
  //const { toast } = useToast();

  //const { forQuestions, setForQuestions } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /*const getForQuestions = async () => {
    try {
      const jsonValue: any = localStorage.getItem("localmarket-forQuestions");
      setForQuestions(JSON.parse(jsonValue));
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };*/

 /* useEffect(() => {
    getForQuestions();
  }, []);*/

 /* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isPhoneNumber = /^\d+$/.test(phone);
    const loginData = {
      [isPhoneNumber ? "phone" : "email"]: phone,
      password: password,
    };*/

    /*try {
      const response = await fetch(
        "https://app.locmarket.store/v1/auth/buyers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "localmarket-token",
          JSON.stringify(data.data.token)
        );
        toast({
          description: data.message,
        });
        if (forQuestions) {
          router.push("/questions");
        } else {
          router.push("/");
        }
      } else {
        toast({
          variant: "destructive",
          title: data.error,
          description: data.message,
        });
        console.log(data);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };*/

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#EAEFF0]">
      
    <div className=" border border-white px-10 py-10 rounded-xl bg-white ">
      <div className=" justify-start text-start">
        <h1 className=" font-bold text-2xl">Welcome Back!</h1>
        <p className=" text-gray-400">Sign in to continue with Hyiprio User Panel</p>
      </div>
       <form className=" my-11">
          
         
           
            
            <div>
            <label>Email or Username</label>
            <input placeholder="Enter your email or username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-grey-200 focus:bg-white focus:outline-none"></input>
            </div>

            <div>
            <label>Password</label>
            <input type={showPassword?"text":"password"} placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-grey-200 focus:bg-white focus:outline-none"></input>
            </div>
         
         
      
          <div className=" flex space-x-3 my-5">
            <div className=" flex space-x-3">
            <input type="checkbox"/>
            <p>Remember me</p>
            </div>
           <div className=" justify-end text-end">
           <p >Forget Password</p>
           </div>
          </div>
        <div className=" justify-center items-center text-center">
          
        <Button className=" bg-orange-400 hover:bg-pink-800 w-full rounded-full text-white"> ACCOUNT LOGIN</Button>
        </div>
         <div className=" text-center">

          <p>Don't have an account? <Link href="/signup">Signup for free</Link></p>
         </div>
       </form>
    </div>
      </div>
  );
}
