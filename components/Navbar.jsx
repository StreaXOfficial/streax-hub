import React from "react";

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Link from "next/link";

const Navbar = () => {
  const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();
const goDashboard=() => {
  if (!connection || !publicKey) { alert("Please connect your wallet first lol")
}
}
  return (    <div className="navbar flex  text-white bg-[#1A1A1A] w-[100vw] h-[50px] self-center b-btn">
    <Link href="/"><div className="text-4xl ml-2 text-[#D8FF69] font-bold">StreaX</div></Link>
    
      <div display="flex justify-end">
      
        <ul className="flex pl-[1000px] mx-6 self-center pt-2 cursor-pointer">
     
      
        <li className="text-xl mx-4 font-bold ">About</li>
          <Link href="/dashboard">    <li className="text-xl mx-4 font-bold " onClick={goDashboard}>Dashboard</li></Link>
          <Link href="https://zz2nn-kaaaa-aaaad-qehxq-cai.ic.fleek.co/index.html">    <li className="text-xl mx-4 font-bold " onClick={goDashboard}>Platform</li></Link>
      
         </ul>
      
      </div>
    

    </div>
  );
};
 
export default Navbar;
