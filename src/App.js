/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const  App = () => {
  const[active, setActive] = useState("one")
  const[translation, setTranslation] = useState("translationOne")
  const[position, setPosition] = useState("")

  const toggleButton = (value) => {
    switch (value) {
      case "two": 
        setActive("two")
        setTranslation("translationTwo")
        setPosition("translateX(4.5rem)")
        break
      case "three": 
        setActive("three")
        setTranslation("translationThree")
        setPosition("translateX(9rem)")
        break
      case "four": 
        setActive("four")
        setTranslation("translationFour")
        setPosition("translateX(13.5rem)")
        break
      case "five": 
        setActive("five")
        setTranslation("translationFive")
        setPosition("translateX(18rem)")
        break
      default: 
        setActive("one")
        setTranslation("translationOne")
        setPosition("translateX(0)")
    }
  }

  return (
    <div className={`h-screen w-full flex m-0 overflow-hidden items-center justify-center ${active === "one" ? "bg-purple-300" : active === "two" ? "bg-teal-300" : active === "three" ? "bg-color-red-300" : active === "four" ? "bg-orange-300" : "bg-cyan-300" }`}>
    <div>
      <svg viewBox="0 0 202.9 45.5" className="relative top-[0.5px] w-28 ml-3 duration-1000" style={{"transform" : position }} >
          <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z" className="fill-gray-800"/>
      </svg>
      <menu className="menu flex gap-6 w-max px-11 py-2 relative items-center justify-center bg-gray-800">
      
      <button className={`menu__item active ${active === "one" && "bg-purple-300 border border-white transform scale-125 duration-1000 -translate-y-3"} rounded-full w-12 h-12`} onClick={() => toggleButton()} >
        <svg className="icon p-2" viewBox="0 0 24 24" >
          <path d="M3.8,6.6h16.4" className="stroke-white"/>
          <path d="M20.2,12.1H3.8" className="stroke-white"/>
          <path d="M3.8,17.5h16.4" className="stroke-white"/>
        </svg>
      </button>
      <button className={`menu__item active ${active === "two" && "bg-teal-300 border border-white transform scale-125 duration-1000 -translate-y-3"} rounded-full w-12 h-12`} onClick={() => toggleButton("two")}>
        <svg className="icon p-2" viewBox="0 0 24 24" width="3em" height="3em">
          <path  d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
          C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" className="stroke-white fill-transparent"/>
          <path  d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" className="stroke-white fill-transparent"/>
        </svg>
      </button>
      <button className={`menu__item active ${active === "three" && "bg-red-300 border border-white transform scale-125 duration-1000 -translate-y-3"} rounded-full w-12 h-12`} onClick={() => toggleButton("three")}>
        <svg className="icon p-2" viewBox="0 0 24 24" width="3em" height="3em">
        <path  d="M3.4,11.9l8.8,4.4l8.4-4.4" className="stroke-white fill-transparent"/>
        <path  d="M3.4,16.2l8.8,4.5l8.4-4.5" className="stroke-white fill-transparent"/>
        <path  d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" className="stroke-white fill-transparent"/>
        </svg>
      </button>
      <button className={`menu__item active ${active === "four" && "bg-orange-300 border border-white transform scale-125 duration-1000 -translate-y-3"} rounded-full w-12 h-12`} onClick={() => toggleButton("four")}>
        <svg className="icon p-2" viewBox="0 0 24 24" width="3em" height="3em">
          <path  d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
            C3.9,4.4,4.4,3.9,5.1,3.9z" className="stroke-white fill-transparent"/>
          <path  d="M4.2,9.3h15.6" className="stroke-white fill-transparent"/>
          <path  d="M9.1,9.5v10.3" className="stroke-white fill-transparent"/>
          </svg>
      </button>
      <button className={`menu__item active ${active === "five" && "bg-cyan-300 border border-white transform scale-125 duration-1000 -translate-y-3"} rounded-full w-12 h-12`} onClick={() => toggleButton("five")}>
        <svg className="icon p-2" viewBox="0 0 24 24" width="3em" height="3em">
          <path  d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
            C3.9,4.4,4.4,3.9,5.1,3.9z" className="stroke-white fill-transparent"/>
          <path  d="M5.5,20l9.9-9.9l4.7,4.7" className="stroke-white fill-transparent"/>
          <path  d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" className="stroke-white fill-transparent"/>
        </svg>
      </button>
      
        </menu>
    </div>
  </div>
  );
};

export default App;
