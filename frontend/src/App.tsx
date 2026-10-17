import { useEffect, useState } from "react";
import "./App.css";

// const API = "http://localhost:3000";
// const CONVERSATION_ID = 1;
// import logo from "../public/logo.svg";
import TopBar from "./components/TopBar";
// import useTheme from "./hooks/useTheme";
// import Sidebar from "./components/Sidebar";
// import MessageBubble from './components/MessageBubble';
function App() {
  // const theme=useTheme();
  // console.log(useTheme());
  return (
    <div className="bg-light text-dark dark:bg-dark dark:text-light  ">
       
      <div className="w-auto ">
        {/* <MessageBubble/> */}
        <svg
          viewBox="0 0 169 144"
          width="16"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Nuzz"
        >
          <mask id="cutout">
            <rect width="169" height="144" fill="white" />
            <rect
              x="39.4727"
              y="31.5664"
              width="34.0239"
              height="76.5537"
              rx="17.0119"
              fill="black"
            />
            <rect
              x="94.5742"
              y="31.5664"
              width="34.0239"
              height="76.5537"
              rx="17.0119"
              fill="black"
            />
          </mask>
          <path
            d="M0.714962 83.3543C0.840426 45.5121 -13.983 -22.7507 118.127 7.90049C175.458 -5.07371 167.355 92.9404 167.355 112.242C167.355 134.085 153.968 146.206 107.816 142.207C98.4821 141.399 88.7431 140.526 79.2468 140.494C39.1966 140.36 0.589498 121.196 0.714962 83.3543Z"
            fill="#57c564"
            mask="url(#cutout)"
          />
        </svg>
        {/* <TopBar /> */}
      </div>

      <div className="bg-light text-dark dark:bg-dark dark:text-light p-8 rounded-xl m-8">
        Tailwind works <br />
        
      </div>
      <TopBar/>
    </div>
  );
}

export default App;
