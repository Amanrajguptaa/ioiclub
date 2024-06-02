import React from 'react'
import {Link, NavLink} from 'react-router-dom';
function Clubs() {
    return (
        <>

<section className='mt-3'>

         <div className="relative w-full ">
          <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717157333/FREE_College_Education_Illustration_Community_fulhyw.png" alt="" />
          <div class="w-full">
          <div class="absolute inset-0  bg-black bg-opacity-25 shadow-2xl pointer-events-none"></div>
         </div>

<div className='absolute inset-0 flex-col top-1/3 justify-center p-10'>
<h1 className="  text-5xl md:text-9xl font-rampart  text-black font-bold md:mb-4">CLUBS</h1>
<p className='mt-6 md:mt-7 text-3xl font-allura  text-black md:text-7xl'>Welcome to PWIOI Clubs...</p>
</div>

         </div>

         <div className='flex flex-wrap my-10 mx-3 gap-2'>
         
         <Link to='/clubs/techclub'>
         <div class="relative w-64 h-64 bg-yellow-300 rounded-full">
          <img class="relative w-64 h-64 bg-yellow-300 rounded-full" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717346981/events/tech_1_igjjlo.jpg" alt="" />
          <div className='gap-2 flex flex-col items-center justify-center absolute inset-0'>
          <h1 className='text-white font-playfair text-2xl'>Tech Club</h1>
          <p className='text-white font-playfair text-xl'>Visit Here</p>
          </div>
          </div>
         </Link>
         
         <Link to='/clubs/sportsclub'>
          <div class="relative w-64 h-64 bg-yellow-300 rounded-full">
          <img class="relative w-64 h-64 bg-yellow-300 rounded-full" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717348558/events/download_1_aowp33.png" alt="" />
          <div className='gap-2 flex flex-col items-center justify-center absolute inset-0'>
          <h1 className='text-white font-playfair text-2xl'>Sports Club</h1>
          <p className='text-white font-playfair text-xl'>Visit Here</p>
          </div>
          </div>
          </Link>

          <Link to='/clubs/culturalclub'>
          <div class="relative w-64 h-64 bg-yellow-300 rounded-full">
          <img class="relative w-64 h-64 bg-yellow-300 rounded-full" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717339742/e5ccec4a-40e3-448d-8003-f469eb197bf2_nknoir.webp" alt="" />
          <div className='gap-2 flex flex-col items-center justify-center absolute inset-0'>
          <h1 className='text-white font-playfair text-2xl'>Cultural Club</h1>
          <p className='text-white font-playfair text-xl'>Visit Here</p>
          </div>
          </div>
          </Link>

          <Link to='/clubs/socialclub'>
          <div class="relative w-64 h-64 bg-yellow-300 rounded-full">
          <img class="relative w-64 h-64 bg-yellow-300 rounded-full" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717340212/images_2_tgtzau.jpg" alt="" />
          <div className='gap-2 flex flex-col items-center justify-center absolute inset-0'>
          <h1 className='text-white font-playfair text-2xl'>Social Club</h1>
          <p className='text-white font-playfair text-xl'>Visit Here</p>
          </div>
          </div>
          </Link>
          
          <Link to='/clubs/bussinessclub'>
          <div class="relative w-64 h-64 bg-yellow-300 rounded-full">
          <img class="relative w-64 h-64 bg-yellow-300 rounded-full" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717340603/images_4_bfevws.jpg" alt="" />
          <div className='gap-2 flex flex-col items-center justify-center absolute inset-0'>
          <h1 className='text-white font-playfair text-2xl'>Business Club</h1>
          <p className='text-white font-playfair text-xl'>Visit Here</p>
          </div>
          </div>
          </Link>

         </div>


         <div className='flex flex-col flex-wrap items-center justify-center my-20 gap-20'>
         <div class="bg-black border border-white shadow-md rounded-lg flex max-w-6xl p-5">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717164479/Head_6_8_1_iullvl.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2 font-playfair">TECH CLUB </h2>
            <p class="text-gray-300 mb-4">
            Tech Club innovation meets inspiration! Our club is a vibrant community of tech enthusiasts, innovators, and future leaders who are passionate about exploring the cutting-edge world of technology. Whether you’re a coding wizard, a hardware tinkerer, or someone with a curiosity for the latest tech trends, our club offers a dynamic platform for you to learn, create, and collaborate. Join us for exciting workshops, hackathons, guest lectures, and collaborative projects that push the boundaries of what's possible. Together, we’re not just keeping up with the future – we’re shaping it. Come, be a part of the technological revolution and turn your ideas into reality with the Tech Club!
            </p>
            <Link to="/clubs/techclub" class="text-blue-500 hover:underline">
              See More
            </Link>

        </div>
    </div>

    <div class="bg-black border border-white shadow-md rounded-lg flex max-w-6xl p-5">
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2 font-playfair">Sports Club</h2>
            <p class="text-gray-300 mb-4">
            Welcome to the Sports Club, where athleticism meets community spirit! Our club is a dynamic and inclusive environment for all sports enthusiasts, from seasoned athletes to newcomers eager to discover their passion for sports. We offer a wide range of activities, including team sports, individual challenges, fitness sessions, and competitive tournaments, ensuring there's something for everyone. Join us to enhance your skills, stay active, and build lifelong friendships. With top-notch facilities, professional coaching, and a supportive community, the Sports Club is your gateway to achieving excellence on and off the field. Embrace the thrill of competition, the joy of teamwork, and the pursuit of a healthier, happier you. Let's make every game count and every moment unforgettable at the Sports Club!
            </p>
            <Link to="/clubs/sportsclub" class="text-blue-500 hover:underline">
              See More
            </Link>
            </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717164391/01_Winning_Soccer_League_2_aoxoiz.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
    </div>

    <div class="font-playfair bg-black border border-white shadow-md rounded-lg flex max-w-6xl p-5">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717164083/maick-maciel-xJFbvG1edaM-unsplash_1_1_s0zb5d.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Cultural Club</h2>
            <p class="text-gray-300 mb-4">
            Step into the vibrant world of culture with our esteemed Cultural Club! We are a kaleidoscope of diversity, creativity, and passion, celebrating the rich tapestry of traditions from around the globe. From captivating performances to colorful festivals, thought-provoking discussions to exhilarating workshops, our club offers a myriad of opportunities for self-expression and exploration. Whether you're a seasoned artist, a budding musician, a passionate dancer, or simply someone who appreciates the beauty of different cultures, our club welcomes you with open arms. Join us as we bridge the gap between communities, foster understanding, and spread joy through the universal language of art and culture. Together, let's ignite the flames of creativity, embrace our differences, and create unforgettable memories that will last a lifetime. Dare to dream, dare to express, and dare to be a part of something extraordinary with the Cultural Club!
            </p>
            <Link to="/clubs/culturalclub" class="text-blue-500 hover:underline">
              See More
            </Link>
            </div>
    </div>

    <div class="font-playfair bg-black border border-white shadow-md rounded-lg flex max-w-6xl p-5">
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Bussiness Club</h2>
            <p class="text-gray-300 mb-4">
            Welcome to the Business Club, where ambition meets opportunity! Our club is the hub for aspiring entrepreneurs, future CEOs, and business-minded individuals looking to make their mark in the world of commerce. Whether you're interested in startups, finance, marketing, or leadership, our club offers a wealth of resources, networking opportunities, and hands-on experiences to help you thrive in the competitive business landscape. From insightful guest speakers and interactive workshops to real-world projects and networking events, we provide the tools and support you need to turn your ideas into reality. Join us as we embark on a journey of innovation, collaboration, and success. Together, let's redefine the future of business and create a legacy that inspires generations to come. Seize the opportunity, unlock your potential, and join the Business Club today!
            </p>
            <Link to="/clubs/bussinessclub" class="text-blue-500 hover:underline">
              See More
            </Link>
            </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717164155/_0017_1_hhqxre.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>

    </div>

    <div class="font-playfair bg-black border border-white shadow-md rounded-lg flex max-w-6xl p-5">
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1717164277/Group_61_1_xzfhb7.png" alt="Placeholder Image" class="w-1/2 rounded-l-lg object-cover"/>
        <div class="p-6 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Social Club</h2>
            <p class="text-gray-300 mb-4">
            Welcome to the Social Club, where connections flourish and memories are made! Our club is a vibrant community of students who share a passion for fostering friendships, creating unforgettable experiences, and making a positive impact on campus life. Whether you're looking to unwind after classes, explore new interests, or give back to the community, our club offers a diverse range of events and activities to suit every taste. From lively social gatherings and cultural celebrations to meaningful volunteer opportunities and advocacy campaigns, there's always something exciting happening with us. Join us as we build bridges, break barriers, and create a more inclusive and vibrant college community. Together, let's embrace diversity, spread kindness, and make a difference one friendship at a time. Come, be a part of something truly special with the Social Club!
            </p>
            <Link to="/clubs/socialclub" class="text-blue-500 hover:underline">
              See More
            </Link>
            </div>
    </div>

         </div>

</section>


        </>
        
    )
}

export default Clubs
