import React from 'react';
import titleImg from '../public/asset3.svg';
import Image from 'next/image';
import './globals.css';
import Card from '@/components/Card';



export default function OceanXPage() {

 const cardData = [
    {id: "01", title: "Founder’s Race Price", description: "Enjoy a super special early registration rate" },
    {id: "02", title: "Founder’s Race Pack", description: "Premium, limited-edition OceanX merchandise" },
    {id: "03", title: "Founder’s Team Edition", description: "Exclusive team tee & early team incentives" },
  ];



  return (
    <main className=" w-full flex flex-col ">
  
  <div className="bg-[url('/KITLVbg.jpg')] bg-no-repeat bg-center bg-cover z-10 pb-80 pt-28 items-center justify-center">

  <header className="flex flex-col max-h-screen items-center  ">
              <h1 className="font-garamond flex py-10 lg:py-0  text-white gap-4 text-sm md:text-base tracking-[0.2em] uppercase"><span>L a u n c h i n g </span> <span>S o o n</span> </h1>
              <Image src={titleImg} className='px-14 lg:px-0'  alt="OceanX Title" />
            <div className="flex flex-col items-center justify-center text-base md:text-lg tracking-[0.2em] uppercase">
              <p className=" text-lg md:text-xl text-white tracking-widest bg-cream/10 px-6 py-3">29TH OCTOBER — 2ND NOVEMBER 2025</p>
              <p className=" text-lg md:text-xl text-white tracking-widest bg-cream/10 px-6">PENANG, MALAYSIA</p>
              <p className="font-Jockey One text-lg md:text-xl text-white tracking-widest bg-cream/10 px-6 py-10">
              BE PART OF THE FIRST WAVE, REGISTER AS A FOUNDER!
            </p>
            </div>

   </header> 

  </div>
   <section className="flex flex-col items-center justify-center bg-asset5 mt-[-280px]   lg:h-[1020px] h-[1640px] z-90">   
 <h3 className="font-cinzel text-xl md:text-2xl text-white uppercase pb-16">
                Unlock Exclusive Founder Privileges
              </h3>
     <div className="lg:w-[80%] w-full flex lg:flex-row flex-col items-center justify-center gap-8  px-8">
  {cardData.map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center pt-4 font-montserrat justify-evenly bg-asset1 lg:h-[260px] h-[200px] z-30  lg:flex-1"
    >
      <Card title={item.title} description={item.description} />
    </div>
  ))}
</div>

    </section>



 
 
  
  <div className=" bg-[url('/KITLVbg.jpg')] bg-no-repeat  bg-center bg-darken lg:pt-0 pt-20 lg:mt-[-180px] mt-[-280px]  lg:h-[400px] z-1 w-full h-[400px] flex flex-col items-center justify-center gap-6">
    
    <button className="bg-[#A8A298] text-2xl text-black px-6 py-3 rounded-sm tracking-[0.25em] md:text-rm] uppercase  transition">
      Register Now as a Founder
    </button>
    <p className='text-white lg:text-xl text-center tracking-[0.25em]'>Limited spots available — This is your legacy moment.</p>
  </div>
       
        

       
        
      
    </main>
  );
}