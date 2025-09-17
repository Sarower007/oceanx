import Link from 'next/link';
import { cardData } from "@/data/dataTwo";
import titleImgTwo from '@/public/asset6.svg';
import Image from 'next/image';
import '@/app/globals.css';
import Card from '@/components/Card';




export default function OceanXPageTwo() {
  return (
    <main className=" w-full mx-auto flex flex-col ">

        <div className="bg-[url('/KITLVbg.jpg')] bg-no-repeat bg-cover  z-10 pb-80 pt-28 items-center justify-center"> 
            <header className="flex flex-col max-h-screen items-center  ">
             
                <Image src={titleImgTwo} className='px-14 lg:px-0'  alt="OceanX Title" />
              
            </header> 
<section className=" lg:h-[2500px] h-[4800px] flex flex-col items-center lg:bg-contain bg-cover bg-no-repeat bg-center justify-center bg-asset8 z-90 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20  max-w-6xl mx-auto">
    {cardData.map((item, idx) => (
      <div
        key={item.id}
        className={`flex items-center h-[380px] justify-center p-28 bg-assetg
          ${cardData.length % 2 !== 0 && idx === cardData.length - 1 ? "max-w-6xl md:col-span-2 md:mx-auto md:w-2/3" : ""}`}
      >
        <Card title={item.title} description={item.description} />
      </div>
    ))}
  </div>
     <div className='flex justify-between items-start px-4  text-2xl text-black  bottom-0 pb-11 pr-11 w-full z-120'>
       <Link
        href="/"
        className="inline-block px-4 py-2  rounded-md border bg-[#A8A298] text-2xl font-jockeyOne hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Home
      </Link>
       <Link
        href="/upcoming"
        className="inline-block px-4 py-2 rounded-md  border bg-[#A8A298] text-2xl font-jockeyOne hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Next Page →
      </Link>
    </div>
</section>




        </div>    



  




















 
       
        

       
        
      
    </main>
  );
}