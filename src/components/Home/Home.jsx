import React from 'react'
function Home() {
    return (
        <>
        <section className=' flex flex-col '>
        <img className='relative w-full h-auto' src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717155461/15561674755cc13b33b5496_1_yvlhk5.jpg" alt="" srcset="" />
        <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className='absolute inset-0 top-1/2'><h1 className='font-custom text-8xl md:text-[160px] text-white text-center '>OUR CLUBS</h1></div>
        
        <div className='my-20 flex flex-col items-center justify-center gap-20'>

        {/* <div class="border border-white shadow-md rounded-lg flex max-w-xl">
        <video class="absolute top-0 left-1/3 max-w-3xl h-full object-cover" autoPlay loop muted>
            <source src="https://res.cloudinary.com/dwwd1oncs/video/upload/v1717054105/backvideo-IJoHdfTl_online-video-cutter.com_ilym4b.mp4" type="video/mp4" />
        </video>
    </div> */}
    <div class="w-full md:w-[96rem] lg:w-[75rem] h-48 md:h-[12rem] lg:h-[24rem] bg-gray-800 overflow-hidden relative border border-white rounded-lg shadow-md">
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted >
        <source src="https://res.cloudinary.com/dkqbawsqm/video/upload/v1717152592/WhatsApp_Video_2024-05-31_at_10.40.38_3199f955_jijsiz.mp4" type="video/mp4" />
        </video>
        <div className=' flex justify-center items-center absolute inset-0'>
            <h1 className='text-6xl font-bold' >CULTURAL CLUB</h1>
        </div>
    </div>

    <div class="w-full md:w-[96rem] lg:w-[75rem] h-48 md:h-[12rem] lg:h-[24rem] bg-gray-800 overflow-hidden relative border border-white rounded-lg shadow-md">
        <video class="absolute top-0 left-0 w-full h-full object-cover object-top " autoPlay loop muted >
        <source src="https://res.cloudinary.com/dkqbawsqm/video/upload/v1717153942/whatsapp-video-2024-05-31-at-104038-35d64883_1e4qaCba_slplox.mp4" type="video/mp4" />
        </video>
        <div className=' flex justify-center items-center absolute inset-0'>
            <h1 className='text-6xl font-bold' >SPORTS CLUB</h1>
        </div>
    </div>

    <div class="w-full md:w-[96rem] lg:w-[75rem] h-48 md:h-[12rem] lg:h-[24rem] bg-gray-800 overflow-hidden relative border border-white rounded-lg shadow-md">
        <video class="absolute top-0 left-0 w-full h-full object-cover object-fill" autoPlay loop muted >
        <source src="https://res.cloudinary.com/dkqbawsqm/video/upload/v1717152910/WhatsApp_Video_2024-05-31_at_10.38.56_e4b2c3b5_bfej5a.mp4" type="video/mp4" />
        </video>
        <div className=' flex justify-center items-center absolute inset-0'>
            <h1 className='text-6xl font-bold' >TECH CLUB</h1>
        </div>
    </div>

    <div class="w-full md:w-[96rem] lg:w-[75rem] h-48 md:h-[12rem] lg:h-[24rem] bg-gray-800 overflow-hidden relative border border-white rounded-lg shadow-md">
        <video class="absolute top-0 left-0 w-full h-full object-cover object-left-top" autoPlay loop muted >
        <source src="https://res.cloudinary.com/dkqbawsqm/video/upload/v1717154603/whatsapp-video-2024-05-31-at-104016-54536491_Vymubco6_flcobs.mp4" type="video/mp4" />
        </video>
        <div className=' flex justify-center items-center absolute inset-0'>
            <h1 className='text-6xl font-bold' >BUSSINESS CLUB</h1>
        </div>
    </div>

    <div class="w-full md:w-[96rem] lg:w-[75rem] h-48 md:h-[12rem] lg:h-[24rem] bg-gray-800 overflow-hidden relative border border-white rounded-lg shadow-md">
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted >
        <source src="https://res.cloudinary.com/dkqbawsqm/video/upload/v1717154285/whatsapp-video-2024-05-31-at-104017-00f37ee6_Y6CWexRY_i0ggm1.mp4" type="video/mp4" />
        </video>
        <div className=' flex justify-center items-center absolute inset-0'>
            <h1 className='text-6xl font-bold' >SOCIAL CLUB</h1>
        </div>
    </div>


        </div>

        <div className='border flex-col  border-white rounded-3xl m-5'>
        <div >
            <h1 className='text-center text-3xl font-bold font-playfair p-5 text-white'>GALLERY</h1>
        </div>

        <div className='p-5 gap-20 flex flex-wrap justify-center '>

             <div class="left-1/3 w-[300px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717077171/Screenshot_2024-05-30_191437_vep0ci.png" alt="Card image"/>
             </div>

             <div class=" w-[370px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717080463/Screenshot_2024-05-30_191347_r20ngl.png" alt="Card image"/>
             </div>

             <div class=" w-[250px] h-[200px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full  object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717080463/Screenshot_2024-05-30_190835_gcpcpp.png" alt="Card image"/>
             </div>

             <div class=" h-[250px] w-[300px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717080463/Screenshot_2024-05-30_190556_1_x5hodg.png" alt="Card image"/>
             </div>

             <div className="  h-[200px] w-[300px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717080463/Screenshot_2024-05-30_190858_dzcrip.png" alt="Card image"/>
             </div>

             <div class=" h-[250px] w-[250px] overflow-hidden bg-white rounded-lg shadow-lg">
             <img class="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717080463/Screenshot_2024-05-30_191542_1_bbmajm.png" alt="Card image"/>
             </div>
        </div>
        </div>  
           
        </section>
        </>
        
    )
}

export default Home
