import React from 'react'
import EventsCards from './EventsCards.jsx'
function Events() {
    return (
        <>
     <section className='mt-0'>
    <div className="relative w-full">

     <video className='w-full' autoPlay loop muted  >
       <source src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1717054105/backvideo-IJoHdfTl_online-video-cutter.com_ilym4b.mp4" type="video/mp4"/>
      </video>

    <div className='absolute inset-0 flex-col top-1/3 justify-center'>
    <h1 className=" font-rampart text-center text-5xl md:text-9xl text-yellow-500 font-bold ">EVENTS</h1>
    <p className=' font-allura text-center p-2 md:p-8 text-xl  text-white md:text-white md:text-5xl'>"Step into the Spotlight: Discover Events That Spark Innovation and Fun!"</p>
    <div className=' flex justify-center'><button className='px-4 hidden md:block bg-yellow-400 py-2 rounded-lg text-black'>Register Now</button></div>
    </div>

    </div>
    </section>

    <EventsCards/>

    

    
    
  </>

       
    )
}

export default Events
 {/* // <>
        // <section>
        // <div className='relative'>
        // <video class="w-full h-auto max-w-full max-h-full" autoPlay loop muted  >
        //     <source src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1716921840/backvideo-IJoHdfTl_j4t2h9.mp4" type="video/mp4"/>
        // </video>
        // </div>


        // <div className='absolute top-[220px] left-[180px] md:absolute md:top-[450px] md:left-[460px]   '>
        // <h1 className=" text-5xl md:text-9xl text-yellow-500 font-bold ">EVENTS</h1>
        // </div>

        // <div className='absolute top-[360px] left-[20px] sm:px-2  md:absolute md:top-[550px] md:left-[200px] md:right-[100px] md:p-16'>
        // <p className='sm:text-xs sm:p-3 text-white md:text-white md:text-2xl'>Join us for an exciting lineup of events designed to engage, inspire, and connect our community! Whether you're looking to learn new skills, network with like-minded individuals, or simply have fun, we have something for everyone.</p>
        // </div>

        // </section>
        // </>
         */}