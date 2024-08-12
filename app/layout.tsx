"use client"
import Link from "next/link"
import '../src/styles/globals.css'

import { useRouter } from 'next/navigation';

export default function RootLayout({children}: {children: React.ReactNode}) {

    const menuItem=(url:string,title:string)=>(
        <li className="bg-black text-white py-2 px-3 rounded-lg"><Link href={url}>{title}</Link></li>
    )

    const router=useRouter()

    const onClickUrl=(url:string)=>{
        router.push(url)
}

    return(
        <html>
        <head />
        <body className="container mx-auto py-[10px]">
            <ul className="inline-flex space-x-3 w-full">
                {menuItem("/","Home")}
                {menuItem("/dashboard","Dashboard")}
                {menuItem("/settings","Settings")}
                {menuItem("/calculator","Calculator")}
                {menuItem("/cari","Cari Orang")}
            </ul>
            {children}
        </body>
        </html>
    )
}