const Pricing = () => {
  return (
    <div>
    <div class="text-center my-10">
        <h1 class="font-bold text-3xl mb-2">Membership Plans</h1>
        <h4 class="text-gray-600 flex justify-center">Upgrade your plan as per your customised requirements. With a paid<br/> membership, you can seamlessly connect with your prospects and get<br/> more responses. Here are some key benefits:</h4>
    </div>
    <div class=" flex flex-row justify-center pt-12">
        <div class="w-full md:w-1/4 h-[500px] text-white border-2 bg-white rounded-lg shadow relative p-10 md:mr-4 mb-10">
            <p class="mt-16 text-gray-400"><span class="font-bold text-pink-500 text-4xl">$0.00</span> /month</p>
            <p class="text-sm text-black font-semibold mt-2">Free Membership</p>    
            <div class=" h-0.5 mr-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <ul class="text-sm list-disc text-black mt-8 pr-7">
                <li class="my-2 m-4"> Match, Chat & Meet</li>
                <li class="my-2 m-4"> 5 Super Likes a Week</li>
                <li class="my-2 m-4"> Hide Advertisements</li>
                <li class="my-2 m-4"> 1 Free Boost a Month</li>
                <li class="my-2 m-4"> New Top Picks every day</li>
                <li class="my-2 m-4"> Prioritised Likes</li>
                <li class="my-2 m-4"> See the Likes you've sent in the Last 7 days</li>
            </ul>
        </div>
          <div class="w-full md:w-1/4 h-[500px] text-white border-2  border-pink-600 bg-white rounded-b-lg shadow relative p-10 md:mr-4 mb-10 md:mb-0">
            <div class="absolute -inset-x-0.5 -top-10 w-[380px] h-[9%]  bg-purple-900  rounded-t-lg flex justify-center text-sm p-3">20% Off for yearly</div>
            <p class="mt-16 text-gray-400"><span class="font-bold text-pink-500 text-4xl">$12.00</span> /month</p>
            <p class="text-sm text-black font-semibold mt-2">Premium Membership</p>
            <div class=" h-0.5 mr-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <ul class="text-sm list-disc text-black mt-8 pr-7">
                <li class="my-2 m-4"> Match, Chat & Meet</li>
                <li class="my-2 m-4"> 5 Super Likes a Week</li>
                <li class="my-2 m-4"> Hide Advertisements</li>
                <li class="my-2 m-4"> 1 Free Boost a Month</li>
                <li class="my-2 m-4"> New Top Picks every day</li>
                <li class="my-2 m-4"> Prioritised Likes</li>
                <li class="my-2 m-4"> See the Likes you've sent in the Last 7 days</li>
                <li class="my-2 m-4"> And many more.</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Pricing