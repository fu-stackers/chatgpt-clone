import { useEffect, useState } from "react";
import "./App.css";

// const API = "http://localhost:3000";
// const CONVERSATION_ID = 1;

import TopBar from "./components/TopBar";
// import useTheme from "./hooks/useTheme";
import Sidebar from "./components/Sidebar";
// import MessageBubble from './components/MessageBubble';
function App() {
  // const theme=useTheme();
  // console.log(useTheme());
  return (
    <div className="bg-box-light   dark:text-text-dark dark:bg-dark-bg  text-text-light  h-dvh">
      <div className="flex justify-between">
        <Sidebar />
        <TopBar />
      </div>
    </div>
  );
}

export default App;
