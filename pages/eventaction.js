import Choose from "../components/Choose";
import Navbar from "../components/Navbar";

export default function Eventacation(){
    return <>
    <Navbar/>
    <div className="img1 w-full h-[100vh]"> 
    <Choose text="Like a Tweet" />
    <Choose text="Retweet a Tweet" />
    </div>
    </>
}