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
      <div className="flex bg-blue-50 border-b-[1px] border-black z-[100]">
        <img
          className="w-28 mt-2 ml-2 cursor-pointer"
          src="./src/assets/logo.png"
          alt=""
        />
        <div
          onClick={() => setToggle(!toggle)}
          className="ml-auto mr-10 cursor-pointer"
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
        style={{ transition: "all ease-out .5s" }}
        className={`bg-red-700 absolute z-[0] w-[100vw] h-[100vh] ${
          toggle ? "top-[0vh]" : "top-[-100vh]"
        }`}
      >
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
