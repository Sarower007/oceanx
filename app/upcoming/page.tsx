import Link from 'next/link';
import { cardData } from "@/data/dataTwo";
import titleImgTwo from '@/public/asset4.svg';
import Image from 'next/image';
import '@/app/globals.css';
import Card from '@/components/Card';




export default function OceanXPageTwo() {
  return (
    <main className="bg-assetupcoming bg-no-repeat bg-black lg:bg-cover bg-cover bg-center  max-h-max w-full items-center justify-center flex flex-col ">

        <div className=" items-center lg:h-screen justify-center flex flex-col pt-28 lg:pt-0">     
             
                <Image src={titleImgTwo}  className='px-14 lg:px-0 '  alt="OceanX Title" />
        </div> 
         <div className='w-full lg:py-40 py-16 flex items-center justify-center bg-black opacity-80 '>
                <h1 className='text-white font-jockeyOne lg:text-3xl tracking-[0.25em] uppercase'> The Race Begins Soon</h1>
            </div>   



                 <div className='flex justify-between items-start px-4 absolute  text-2xl text-black  bottom-0 pb-11 pr-11 w-full z-120'>
   
       <Link
        href="/activities"
        className="inline-block px-4 py-2 rounded-md  border bg-[#A8A298] text-2xl font-jockeyOne hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
       ← Previous
      </Link>
    </div>   
      
    </main>
  );
}