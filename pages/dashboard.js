import DataBox from "../components/DataBox";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

export default function About() {
  return <div className="img1 w-full h-[100vh]">
    <Navbar/>
    <Sidenav/>
    <h1 className="text-white text-5xl font-bold text-center absolute top-[70px] left-[470px]">Connect to Your Favorite Platform</h1>
    <div className="absolute top-[200px] left-[500px]">
      <DataBox platform="Twitter" pic={'C:\Users\vshlc\streax-hub\components\twitter.png'}/>

    </div>
    <div className="absolute top-[200px] left-[900px]">
      <DataBox platform="Discord" pic={'C:\Users\vshlc\streax-hub\components\discord.png'}/>
      
    </div>
  </div>
}