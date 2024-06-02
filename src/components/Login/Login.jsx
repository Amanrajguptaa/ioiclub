import React from 'react'

function Login() {
    return (
        <>
        
        <div className='relative'>
         <img className='max-h-screen w-full' src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1717183800/Register_hydgph.png" alt="" srcset="" />
         </div>

         <div className='absolute inset-0 top-1/4 m-20 flex items-center justify-center '>

          
            <div className=' '>
                <div className='mx-20'><h1 className=' text-center font-custom text-9xl'>Welcome to Club Member Portal</h1></div>
            </div>

            <div class="w-full max-w-md min-h-40 bg-white p-8 rounded-lg shadow-lg">
           <h2 class="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
            <div >
                <form>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email / Member ID</label>
                  <input type="text" id="email" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" required/>
                </div>
                <div class="mb-4">
                  <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
                  <input type="password" id="password" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" required/>
                </div>
                
                <div class="flex items-center justify-between mb-4">
                  <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
                </div>
                <div>
                  <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Sign In</button>
                </div>
              </form>
              </div>
              </div>
        </div>

        </>
        
    )
}

export default Login
