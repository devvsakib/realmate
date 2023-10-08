import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Login =() => {
    return(
        <div class="w-full h-screen flex items-start">
            <div class="relative w-1/2 h-full flex flex-col">
                <img src="./img/couple.png" class="w-full h-full object-cover"/>
            </div>
            <div class="w-1/2 h-full bg-purple-50 flex flex-col p-20 justify-between items-center ">
                <h1 class=" text-black text-bold text-lg font-semibold max-w-[500px] items-center mx-auto">
                    We always love to see you
                </h1>

                <div class=" w-full flex flex-col ">
                    
                    <div class="w-full flex flex-col">
                        <input
                          type="text"
                          placeholder="Email/Phone"
                          pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$|^[\+]?[0-9]{1,3}[\s]?[\(]?[0-9]{1,6}[\)]?[-\s\./0-9]*$"
                          class="w-full px-2 text-black border-b py-2 bg-white my-2 rounded-md outline-none focus:outline-none"
                        />
                          <p class="text-sm text-gray-400">*use country code before your number.</p>
                        <input
                            type="password"
                            placeholder="Password"
                            class="w-full px-2 text-black border-b py-2 bg-white rounded-md my-2 outline-none focus:outline-none"/>    
                    </div>

                    <div class="w-full flex items-center justify-between">
                        <div class="w-full flex items-center">
                            <input type="checkbox" class="w-4 h-4 mr-2"/>
                            <p class="text-sm">
                                Remember me
                            </p>

                        </div>
                        <button class="text-sm text-pink-400 font-semibold underline underline-offset-2 cursor-pointer whitespace-nowrap">
                            Forget password?
                        </button>
                    </div>
                    <div class=" my-3 w-full flex flex col">
                        <button class=" w-full bg-pink-600 font-semibold my-2 rounded-md py-2 text-center flex items-center justify-center text-white">
                            Login Now
                        </button>
                    </div> 
                    <div class="flex justify-center">
                            <p class=" text-black/80 text-normal">
                                or Login with
                            </p>
                    </div>
                    <button class=" font-semibold w-full bg-white my-2 rounded-md py-2 text-center flex items-center justify-center text-black ">
                    <FaGoogle className="mr-2" />Signin With Google 
                    </button>
                    
                    <button class=" font-semibold w-full bg-white rounded-md my-2 py-2 text-center flex items-center justify-center text-black ">
                    <FaTwitter className="mr-2" />Signin With twitter 
                    </button>
                    <button class=" font-semibold w-full bg-white rounded-md my-2 py-2 text-center flex items-center justify-center text-black">
                    <FaFacebook className="mr-2" />Signin With facebook 
                    </button>
                </div>
                    
                <div class="w-full flex my-4 items-center justify-center">
                    <p class="text-sm font-normal text-black">
                        Don't have a account? <span class="text-pink-400 font-semibold underline underline-offset-2 cursor-pointer"> Create Account </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;