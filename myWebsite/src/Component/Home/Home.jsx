import React from 'react'

function Home() {
  return (
    <div class="hero w-full min-h-screen">
        <section class="firstSection flex justify-around items-center my-[130px] text-black">
            <div class="leftSection w-[30%] text-2xl my-8">
                <div>Welcome to the Library</div>
                <div>Here you can find:-</div>
                <span id="element" class="text-[#aa6be4]"></span>
            </div>
            <div class="rightSection w-[30%]">
                <img src="../../images/pic.png" class="w-full my-[50px]" alt="Image" />
            </div>
        </section>
    </div>
  )
}

export default Home
