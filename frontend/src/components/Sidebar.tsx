import React, { useEffect, useState } from "react";
import reallogo from "../../public/reallogo.svg";
import {
  ChevronDown,
  Search,
  Images,
  MessageCirclePlus,
  Clock,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { fetchConversation, fetchConversationTitle } from "../api/chatApi";
import type { Conversation } from "../types/chat";

function Sidebar() {
  const [size, setSize] = useState<boolean>(true);
  const [recentsize, setRecentSize] = useState<boolean>(true);
  const [conversationTitle, setconversationTitle] = useState<Conversation[]>(
    [],
  );

  function Toggle() {
    setSize((previes) => !previes);
  }
  function ToggleRecent() {
    setRecentSize((prev) => !prev);
  }
  useEffect(() => {
    fetchConversationTitle(1)
      .then((data) => {
        (console.log(data), setconversationTitle(data));
      })
      .catch((error) => console.log(error));
  }, []);

  function formatTitle(title: string): string {
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }
    return title;
  }
  return (
    <div
      className={`flex flex-col   pt-4 w-[25%] gap-4 ${size ? "pl-26" : "pl-36 transition duration-100x00"} `}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`${size ? "flex items-center gap-4" : "flex flex-col  gap-4"}`}
        >
          <div className="flex text-center gap-1">
            <img
              src={reallogo}
              className="h-8 w-8 cursor-pointer"
              alt="logo-items"
            />
            <h2
              className={`text-brand dark:text-box font-extrabold cursor-pointer text-3xl font-mono ${size ? "visible" : "hidden transition duration-500"}`}
            >
              nuzz ai
            </h2>
          </div>
          <ChevronLeft
            size={16}
            onClick={Toggle}
            className={`${size ? "" : "rotate-180 transition duration-300"}`}
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer ">
          <MessageCirclePlus size={24} />
          <h6
            className={`text-1xl font-sans  font-medium cursor-pointer  ${size ? "" : "hidden transition duration-500"}  `}
          >
            New Chat
          </h6>
        </div>{" "}
        <div className="flex items-center gap-2 cursor-pointer">
          <Search size={24} />
          <p
            className={`text-1xl font-sans cursor-pointer  font-medium  ${size ? "" : "hidden transition duration-500"}`}
          >
            Search
          </p>
        </div>
        <div className="flex items-center cursor-pointer gap-2">
          <Images size={24} />
          <p
            className={`text-1xl font-sans cursor-pointer  font-medium  ${size ? "" : "hidden transition duration-500"}`}
          >
            Images
          </p>
        </div>
        <div className="flex items-center cursor-pointer gap-2">
          <Clock />
          <p
            className={`text-1xl font-sans cursor-pointer  font-medium  ${size ? "" : "hidden transition duration-500"}`}
          >
            Scheduled
          </p>
        </div>{" "}
        <div className="flex items-center cursor-pointer gap-2">
          <GraduationCap />
          <p
            className={`text-1xl font-sans cursor-pointer  font-medium  ${size ? "" : "hidden transition duration-500"}`}
          >
            Students
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col cursor-pointer gap-4 ${size ? "" : "hidden transition duration-500"} `}
      >
        <div className="flex cursor-pointer  items-center gap-1 ">
          <h3>Recents</h3>
          <ChevronDown size={16} onClick={ToggleRecent} />
        </div>
        <div
          className={`flex-1 gap-3 overflow-y-auto scroll-auto ${recentsize ? "visible" : "hidden"}`}
        >
          {conversationTitle.map((item) => (
            <p>{formatTitle(item.title)}</p>
          ))}
        </div>
      </div>
      <div className={`fixed bottom-4 ${size ? "" : ""}`}>
        <div className="cursor-pointer">
          <h1>profile</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
