import React from 'react'
import { Link } from 'react-router-dom'
function TechClub() {
    return (
        <>
        <section >
        <div className='flex flex-col items-center justify-center'>
            <div className=''><h1 className='text-center text-white text-7xl md:text-9xl font-custom'>Tech Club </h1></div>
            <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717260735/Robot_2_2_sv1k6y.png" alt="" srcset="" />
        </div>
        </section>

        <div className='relative '>
            <div className=''><img className='object-cover w-full' src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717249179/bg-1_1_1_khlahm.png" alt="" srcset="" /></div>
            <div className='absolute inset-0 top-[1%] md:top-[15%] p-7 flex flex-col '>
                <h1 className='text-center text-white mb-5 text-2xl md:text-7xl font-playfair'>About Tech Club</h1>
                <p className='text-white font-satisfy text-xl'>Welcome to the Tech Club, the heartbeat of innovation and technology at [Your College Name]! Our club is a vibrant community of passionate students who thrive on exploring the latest advancements in technology, coding, and digital design. We host a range of exciting events, from hackathons and coding boot camps to guest lectures by industry leaders and hands-on workshops. Whether you’re a seasoned programmer or just starting your tech journey, the Tech Club provides a supportive environment to enhance your skills, collaborate on cutting-edge projects, and transform ideas into reality. Join us to network with like-minded peers, gain real-world experience, and be part of a movement that’s shaping the future of technology. Your next big breakthrough starts here at the Tech Club!</p>
            </div>
        </div>

<div className='my-20 flex-col gap-5'>
    <div className='mb-10'><h1 className='text-center text-6xl font-playfair'>TEAM COORDINATERS</h1></div>

<div className='flex justify-around items-center'>
<div class="bg-black border border-white text-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
        <img src="https://media.licdn.com/dms/image/D5603AQGMarAsv8QiCQ/profile-displayphoto-shrink_400_400/0/1701102409121?e=1722470400&v=beta&t=-v8X8Fb1nQt2smLq_E8U2RMo1vAyEOUsI7LWt2GPnT8" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Deepak Sir</h2>
            <p class="mt-2">Hi there! I'm President of Tech Club</p>
            <div class="mt-4 flex space-x-2">
                <Link to='#' class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect with me</Link>
            </div>
            <div class="mt-4 flex space-x-4">
                <Link to='#' class="text-pink-500 hover:text-pink-600"><i class=" text-4xl fab fa-instagram"></i></Link>
                <Link to='#' class="text-blue-700 hover:text-blue-800"><i class="text-4xl fab fa-linkedin"></i></Link>
                <Link to='#' class="text-blue-500 hover:text-blue-600"><i class="text-4xl fab fa-twitter"></i></Link>
            </div>
        </div>
    </div>

</div>
 
    <div className='flex flex-wrap items-center justify-center gap-2 mx-3 my-20'>

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-72">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250881/toshjmosh_a_stunning_3D_cartoon_illustration_of_a_male_student__25db8c50-fd24-437a-8a50-39195302f967_1_qz0mo7.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Jivan</h2>
            <p class="mt-2">Hi there! I'm Jivan, an empathetic coder with high EQ. I solve problems through design and code.</p>
            <div class="mt-4 flex space-x-2">
                <Link to='#' class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect with me</Link>
            </div>
            <div class="mt-4 flex space-x-4">
                <Link to='#' class="text-pink-500 hover:text-pink-600"><i class=" text-4xl fab fa-instagram"></i></Link>
                <Link to='#' class="text-blue-700 hover:text-blue-800"><i class="text-4xl fab fa-linkedin"></i></Link>
                <Link to='#' class="text-blue-500 hover:text-blue-600"><i class="text-4xl fab fa-twitter"></i></Link>
            </div>
        </div>
    </div>

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-72">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250881/toshjmosh_a_stunning_3D_cartoon_illustration_of_a_male_student__25db8c50-fd24-437a-8a50-39195302f967_1_qz0mo7.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Divya </h2>
            <p class="mt-2">Hi there! I'm Divya, an empathetic coder with high EQ. I solve problems through design and code.</p>
            <div class="mt-4 flex space-x-2">
                <Link to='#' class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect with me</Link>
            </div>
            <div class="mt-4 flex space-x-4">
                <Link to='#' class="text-pink-500 hover:text-pink-600"><i class=" text-4xl fab fa-instagram"></i></Link>
                <Link to='#' class="text-blue-700 hover:text-blue-800"><i class="text-4xl fab fa-linkedin"></i></Link>
                <Link to='#' class="text-blue-500 hover:text-blue-600"><i class="text-4xl fab fa-twitter"></i></Link>
            </div>
        </div>
    </div>

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-72">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250878/toshjmosh_a_stunning_3D_cartoon_illustration_of_kinder_teacher__a97f67b1-a70a-478a-835d-cec09220f5ed_l7lv8i.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Name</h2>
            <p class="mt-2">Hi there! I'm Name, an empathetic coder with high EQ. I solve problems through design and code.</p>
            <div class="mt-4 flex space-x-2">
                <Link to='#' class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect with me</Link>
            </div>
            <div class="mt-4 flex space-x-4">
                <Link to='#' class="text-pink-500 hover:text-pink-600"><i class=" text-4xl fab fa-instagram"></i></Link>
                <Link to='#' class="text-blue-700 hover:text-blue-800"><i class="text-4xl fab fa-linkedin"></i></Link>
                <Link to='#' class="text-blue-500 hover:text-blue-600"><i class="text-4xl fab fa-twitter"></i></Link>
            </div>
        </div>
    </div>

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-72">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250881/toshjmosh_a_stunning_3D_cartoon_illustration_of_a_male_student__25db8c50-fd24-437a-8a50-39195302f967_1_qz0mo7.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div className='flex-col flex-wrap'>
            <h2 class="text-xl font-bold">Name </h2>
            <p class="mt-2">Hi there! I'm Name, an empathetic coder with high EQ. I solve problems through design and code.</p>
            <div class="mt-4 flex space-x-2">
                <Link to='#' class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect with me</Link>
            </div>
            <div class="mt-4 flex space-x-4">
                <Link to='#' class="text-pink-500 hover:text-pink-600"><i class=" text-4xl fab fa-instagram"></i></Link>
                <Link to='#' class="text-blue-700 hover:text-blue-800"><i class="text-4xl fab fa-linkedin"></i></Link>
                <Link to='#' class="text-blue-500 hover:text-blue-600"><i class="text-4xl fab fa-twitter"></i></Link>
            </div>
        </div>
    </div>
    </div>
</div>    

<div className='flex flex-wrap flex-col items-center justify-center gap-5 my-10'>
    <div>
        <h1 className='text-6xl font-bold font-playfair'>POSTS</h1>
    </div>


    <div class="bg-black  shadow-md rounded-lg flex max-w-8xl p-5">
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2 font-playfair">Exploring Blockchain: Revolutionizing the Digital World with the Tech Club</h2>
            <p class="text-gray-300 mb-4">
            Blockchain technology is transforming industries by offering secure, decentralized, and transparent ways to record transactions and manage data. Originally devised for cryptocurrencies like Bitcoin, blockchain's potential now extends far beyond digital currencies. Its applications range from supply chain management and healthcare to voting systems and intellectual property protection.            </p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709459015/media/3d-rendering-kid-playing-digital-game-removebg-preview_1_tgbzdf.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
    </div>
    
    <div class="bg-black shadow-md rounded-lg flex max-w-8xl p-5">
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2 font-playfair">Unlocking the Future: Web Development in the Tech Club</h2>
            <p class="text-gray-300 mb-4">Web development is a dynamic field essential for creating and maintaining websites, blending creativity with technical skills. As a web developer, you can work on both frontend and backend aspects, using technologies like HTML, CSS, JavaScript, and various frameworks. The Tech Club offers workshops, hackathons, and a mentorship program to help you learn and grow in this exciting domain. Join us to collaborate on real-world projects, enhance your skills, and be part of a community that's shaping the digital future.
            </p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1716718728/media/Group_2-removebg-preview_lv66li.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
    </div>

</div>    


        </>
        
    )
}

export default TechClub
