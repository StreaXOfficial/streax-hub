import Link from "next/link";
import DataBox from "../components/DataBox";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

export default function GiveAways() {
  return <div className="img1 w-full h-[100vh]">
    <Navbar/>
    <Sidenav/>
    <h1 className="text-white text-5xl font-bold text-center absolute top-[70px] left-[470px]"> Have Fun with your Userbase</h1>
    <div className="absolute top-[200px] left-[500px]">
   <Link href="/giveaway"> <DataBox funcType="Giveaway" isgiveaway={true} pic={'C:\Users\vshlc\streax-hub\components\twitter.png'} desc="You can create a giveaway for your base and distribute the prize on $SOL "/></Link>  

    </div>
    <div className="absolute top-[200px] left-[900px]">
      <DataBox funcType="Token Gating " pic={'C:\Users\vshlc\streax-hub\components\discord.png'} desc="You can create a giveaway for your base and distribute the prize on $SOL" isgiveaway={true}/>
      
    </div>
  </div>
} 