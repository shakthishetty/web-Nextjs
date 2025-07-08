

"use client"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import MobileMenu from "../humburger/Humburger"


export default function Navbar(){
    return (
        <>
        <div className="navbarInfo">
               <div className="flex justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">choose country</p>
                    <div>
<Select >
                       <SelectTrigger className="w-[180px]">
                       <SelectValue placeholder="Oman" />
                       </SelectTrigger>
                        <SelectContent className="relative z-1000">
                        <SelectItem value="light">India</SelectItem>
                        <SelectItem value="dark">USA</SelectItem>
                        <SelectItem value="system">kOREA</SelectItem>
                        </SelectContent>
                         </Select>
                    </div>
                      
               </div>
               <button className="h-10 w-26  px-2 py-2 rounded-2xl bg-green-400 text-white">
                  Continue
               </button>
        </div>

<div className="navbarInfo1">
  {/* Hidden on small screens */}
  <p className="hidden md:block">Diamond stone trading and services spc</p>
  <p className="hidden md:block">Working Hours: 7 AM to 6 PM</p>
  <p className="hidden md:block">Contact: +968 920 99 729</p>

  {/* Always visible */}
  <p className="block">Email: dts@diamondstonex.com</p>
</div>

       <div className="flex items-center justify-between px-6 py-4  mx-auto w-full sticky top-0 z-100 bg-white shadow-xl rounded">
  
  <div className="flex-shrink-0 lg:relative left-40">
    <h1 className="text-xl font-bold">LOGO</h1>
  </div>

  {/* Center - Navigation */}
  <nav className="hidden sm:px-4 md:flex justify-center items-center gap-8 flex-1">
    <Link href="/" className="text-sm text-gray-600 hover:text-primary" scroll={true}>Marble & Collections</Link>
    <Link href="/aboutUs" className="text-sm text-gray-600 hover:text-primary">House of Diamond Stone</Link>
    <Link href="/project" className="text-sm text-gray-600 hover:text-primary">Projects & Showcase</Link>
  </nav>


  <MobileMenu/>


</div>


</>




   
     
    )
}