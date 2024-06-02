import React from 'react'
import { Link } from 'react-router-dom'

function SportsClub() {
    return (
        <>
        <section >
        <div className='flex items-center justify-center'>
            <div className=''><h1 className='text-center text-white text-7xl md:text-9xl font-custom'>Sports Club </h1></div>
            <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717262228/basketball-player-action-sunset_1_su3qse.png" alt="" srcset="" />
        </div>
        </section>

        <div className='flex '>
            <img className='' src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717263244/american-football-player-posing-with-ball-white_1_exezzo.png" alt="" srcset="" />
            <div className=' p-7 flex flex-col '>
                <h1 className='text-center text-white mb-5 text-2xl md:text-7xl font-playfair'>About Sports Club</h1>
                <p className='text-white font-satisfy text-xl'>Welcome to the Tech Club, the heartbeat of innovation and technology at [Your College Name]! Our club is a vibrant community of passionate students who thrive on exploring the latest advancements in technology, coding, and digital design. We host a range of exciting events, from hackathons and coding boot camps to guest lectures by industry leaders and hands-on workshops. Whether you’re a seasoned programmer or just starting your tech journey, the Tech Club provides a supportive environment to enhance your skills, collaborate on cutting-edge projects, and transform ideas into reality. Join us to network with like-minded peers, gain real-world experience, and be part of a movement that’s shaping the future of technology. Your next big breakthrough starts here at the Tech Club!</p>
            </div>
        </div>

<div className='my-20 flex-col gap-10'>
    <div className='mb-10'><h1 className='text-center text-6xl font-playfair'>TEAM COORDINATERS</h1></div>

<div className='flex justify-center items-center'>
<div class="bg-black border border-white text-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
        <img src="https://media.licdn.com/dms/image/D4D03AQFiTRM-FGrU2w/profile-displayphoto-shrink_400_400/0/1669958711940?e=1722470400&v=beta&t=cHMXeJ5H5R_3JTqGRTQlJAPanm-6nlyaeciNZLKuo0o" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Anukul Sir</h2>
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
 
    <div className='flex flex-wrap items-center justify-center gap-5 my-20'>

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-80">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250881/toshjmosh_a_stunning_3D_cartoon_illustration_of_a_male_student__25db8c50-fd24-437a-8a50-39195302f967_1_qz0mo7.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Navneet</h2>
            <p class="mt-2">Hi there! I'm Navneet, an empathetic coder with high EQ. I solve problems through design and code.</p>
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

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-80">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250881/toshjmosh_a_stunning_3D_cartoon_illustration_of_a_male_student__25db8c50-fd24-437a-8a50-39195302f967_1_qz0mo7.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Nitesh</h2>
            <p class="mt-2">Hi there! I'm Nitesh, an empathetic coder with high EQ. I solve problems through design and code.</p>
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

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-80">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250878/toshjmosh_a_stunning_3D_cartoon_illustration_of_kinder_teacher__a97f67b1-a70a-478a-835d-cec09220f5ed_l7lv8i.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div>
            <h2 class="text-xl font-bold">Samriddhi</h2>
            <p class="mt-2">Hi there! I'm Samriddhi, an empathetic coder with high EQ. I solve problems through design and code</p>
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

    <div class="bg-black text-white border border-white p-6 rounded-lg shadow-lg flex-col items-center w-80">
    <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717250878/toshjmosh_a_stunning_3D_cartoon_illustration_of_kinder_teacher__a97f67b1-a70a-478a-835d-cec09220f5ed_l7lv8i.png" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover"/>
        <div className='flex-col flex-wrap'>
            <h2 class="text-xl font-bold">Mansi</h2>
            <p class="mt-2">Hi there! I'm Mansi, an empathetic coder with high EQ. I solve problems through design and code.</p>
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
            <h2 class="text-2xl font-bold mb-2 font-playfair">Unleash Your Potential: The Power of Sports</h2>
            <p class="text-gray-300 mb-4">
            Engaging in sports is more than just a pastime—it's a pathway to a healthier, more fulfilling life. Sports cultivate discipline, teamwork, and resilience, teaching invaluable life skills that extend beyond the playing field. Regular physical activity boosts mental health, reduces stress, and fosters a sense of community and belonging. At our sports club, we believe in the transformative power of sports to unlock potential and bring out the best in everyone. Join us, and discover how sports can shape your future!
</p>
</div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717263877/Vrstva_1_ofvl6f.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
    </div>
    
    <div class="bg-black shadow-md rounded-lg flex max-w-8xl p-5">
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2 font-playfair">Sports Spotlight: Fascinating Facts You Didn’t Know</h2>
            <p class="text-gray-300 mb-4">
            Did you know that playing sports can improve your academic performance? Studies show that students who participate in sports are more likely to excel in school and develop essential time management skills. Sports also enhance cardiovascular health, reducing the risk of chronic diseases by up to 40%. Additionally, participating in team sports fosters strong social connections and a sense of community, which are crucial for mental well-being. At our sports club, we celebrate these benefits and more, encouraging everyone to dive into the world of sports and experience the extraordinary impact it can have on their lives.
            </p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717264054/image_1_jggr57.png"/>
        </div>

</div>         </>
    )
}

export default SportsClub
