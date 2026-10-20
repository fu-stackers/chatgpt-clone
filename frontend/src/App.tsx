import { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import ChatInput from "./components/ChatInput";
function App() {
  function handleSend(text: string) {
    // The backend connection comes in the next step
    console.log("send:", text);
  }
  return (
    <div className="flex h-dvh bg-light-bg text-text-light dark:bg-dark-bg dark:text-text-dark">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <div className="justify-end flex ">
          <TopBar />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-semibold">Hello</h1>
          <p className="mt-2 text-lg text-text-light/70 dark:text-text-dark/70">
            How can I help you today?
          </p>
        </div> 

        <div className="mx-auto w-full max-w-3xl px-4 pb-10">
          <ChatInput onSend={handleSend} />
        </div>


      </main>
    </div>
  );
}

export default App;
