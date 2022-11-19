import { export_default } from "@solana/web3.js";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
export default NextAuth({
    providers:[
Providers.Twitter({
    clientId:'1342733669635555330-2yc0gdEcpaCaBffLXyVse4wYUH517r',
    clientSecret:'yZ791n98vTg7MUueDBmm9Kxfe1q6jrfYvqV5cn47lsYxA'
}) 
    ],
})