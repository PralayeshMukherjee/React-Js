import React, { useEffect, useRef, useState } from 'react'
import Pic from '../../images/pic.png'

function Home() {
    const [typed,setTyped] = useState("");
    const stringIdx = useRef(0);
    const charIdx = useRef(0);//by the help of this we stop re-rendeing
    const strings = [
        "More than 1000 books",
        "Reach out to the Librarian",
        "See all your issued books",
        "See the dates of every book for resubmission"
    ];
    useEffect(()=>{
        const iterate = () =>{
            if(charIdx.current<strings[stringIdx.current].length){
                setTyped((prev) => prev + strings[stringIdx.current].charAt(charIdx.current));
                charIdx.current++;
                setTimeout(iterate,85);
            }else{
                setTimeout(() => {
                    charIdx.current = 0
                    stringIdx.current = (stringIdx.current + 1) % strings.length;
                    setTyped("")
                }, 2000);
            }
        }
        iterate();
    },[])
  return (
    <div className="hero w-full min-h-screen">
        <section className="firstSection flex justify-around items-center my-[130px] text-black">
            <div className="leftSection w-[30%] text-2xl my-8">
                <div>Welcome to the Library</div>
                <div>Here you can find:-</div>
                <span id="element" className="text-[#aa6be4]">{typed}</span>
            </div>
            <div className="rightSection w-[30%]">
                <img src={Pic} className="w-full my-[50px]" alt="Image" />
            </div>
        </section>
    </div>
  )
}

export default Home
