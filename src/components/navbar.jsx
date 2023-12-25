import React, { useEffect, useState } from "react";

const navbar = () => {
  const [toggle, setToggle] = useState(false);

  // document.getElementById("line1").style.transition='all ease-out .5s'
  // document.getElementById("line2").style.transition='all ease-out .5s'
  // useEffect((e)=>{
  //     // e.preventDefault()
  //     if(toggle){
  //         document.getElementById("line1").style.width='3rem'
  //         document.getElementById("line1").style.transform='rotate(45deg)'
  //         document.getElementById("line1").style.transformOrigin='center'
  //         document.getElementById("line1").style.top='.8rem'

  //         document.getElementById("line2").style.width='3rem'
  //         document.getElementById("line2").style.transform='rotate(-45deg)'
  //         document.getElementById("line2").style.transformOrigin='center'

  //     }
  //     else{
  //         document.getElementById("line1").style.width='5rem'
  //         document.getElementById("line1").style.transform='rotate(0deg)'
  //         document.getElementById("line1").style.transformOrigin='center'
  //         document.getElementById("line1").style.top='0rem'
  //         // document.getElementById("line1").style.transition='all ease-out .5s'

  //         document.getElementById("line2").style.width='4rem'
  //         document.getElementById("line2").style.transform='rotate(0deg)'
  //         document.getElementById("line2").style.transformOrigin='center'
  //         // document.getElementById("line2").style.transition='all ease-out .5s'

  //     }

  // },[toggle])

  return (
    <div>
      <div className="flex z-[100] fixed w-[100vw] ">
        <img
          className="w-28 mt-2 ml-2 cursor-pointer z-[100]"
          src="./src/assets/logo.png"
          alt=""
        />
        <div
          onClick={() => setToggle(!toggle)}
          className="ml-auto mr-10 cursor-pointer z-[100]"
        >
          <p
            style={{
              transition: "all ease-out .5s",
              transformOrigin: "center",
            }}
            id="line1"
            className={`h-[1.5px]  bg-black  mt-5 mb-3 relative ${
              toggle
                ? "w-[3rem] rotate-45 top-[.8rem]"
                : "w-[5rem] rotate-0 top-[0rem]"
            }`}
          ></p>
          <p
            style={{
              transition: "all ease-out .5s",
              transformOrigin: "center",
            }}
            id="line2"
            className={`h-[1.5px]  bg-black ml-auto  relative ${
              toggle ? "w-[3rem] -rotate-45 " : "w-[4rem] -rotate-0"
            }`}
          ></p>
        </div>
      </div>

      <div
        style={{ transition: "all ease-out 1s",zIndex:"99" }}
        className={`bg-blue-200 absolute z-[0] w-[100vw] h-[100vh] grid place-content-center ${
          toggle ? "top-[0vh]" : "top-[-100vh]"
        }`}
      >
        <ul className="w-[100vw]">
          <li className=" w-[100vw] text-center text-8xl pb-10 cursor-pointer text-white align-middle hover:bg-blue-300 transition-all duration-500">Home</li>
          <li className=" w-[100vw] text-center text-8xl pb-10 cursor-pointer text-white align-middle hover:bg-blue-300 transition-all duration-500">About</li>
          <li className=" w-[100vw] text-center text-8xl pb-10 cursor-pointer text-white align-middle hover:bg-blue-300 transition-all duration-500">Contact</li>
          </ul>
      </div>
      
    </div>
  );
};

export default navbar;
