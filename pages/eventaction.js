import Choose from "../components/Choose";
import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Eventaction(){
    return <>
    <Navbar/>
    <div className="img1 w-full h-[100vh]"> 
    <Choose text="Like a Tweet" />
    <Choose text="Retweet a Tweet" />
    <Choose text="Share a Tweet" />
 <Link href='tweets'><div className="bg-[#D8FF69] w-[120px] h-[60px] rounded-lg text-center pt-3 mr-3 flex justify-center absolute left-[700px]">POST GIVE AWAY</div></Link>
    
    </div>
    </>
}