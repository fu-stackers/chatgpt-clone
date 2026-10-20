import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  Search,
  Images,
  MessageCirclePlus,
  Clock,
  GraduationCap,
} from "lucide-react";
import { useConversations } from "../hooks/useConversations";

const navItems = [
  { icon: MessageCirclePlus, label: "New Chat" },
  { icon: Search, label: "Search" },
  { icon: Images, label: "Images" },
  { icon: Clock, label: "Scheduled" },
  { icon: GraduationCap, label: "Students" },
];

const itemClass =
  "flex items-center gap-2 cursor-pointer rounded-[20px] px-2 py-2 text-sm transition duration-200 hover:bg-border-light dark:hover:bg-dark-border-bg";

export default function Sidebar() {
  const [size, setSize] = useState(true);
  const [recentsize, setRecentSize] = useState(true);
  const { conversations } = useConversations(1);

  return (
    <div
      className={`flex flex-col pt-4 w-[20%] gap-4 ${size ? "pl-16" : "pl-36 transition duration-100"}`}
    >
      <div className="flex flex-col gap-3">
        <div
          className={size ? "flex items-center gap-4" : "flex flex-col gap-4"}
        >
          <div className="flex gap-1">
            <img
              src="/reallogo.svg"
              className="h-8 w-8 cursor-pointer"
              alt="logo-items"
            />
            <h2
              className={`text-brand dark:text-box font-extrabold cursor-pointer text-3xl font-mono ${size ? "visible" : "hidden transition duration-500"}`}
            >
              nuzz ai
            </h2>
          </div>
          <button
            onClick={() => setSize((prev) => !prev)}
            aria-label={size ? "Collapse sidebar" : "Expand sidebar"}
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-transparent transition duration-200  hover:bg-border-light dark:hover:bg-dark-border-bg"
          >
            <ChevronLeft
              size={16}
              className={size ? "" : "rotate-180 transition duration-300"}
            />
          </button>
        </div>
        {navItems.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={`group relative flex cursor-pointer items-center gap-2 rounded-[20px] px-2 py-2 text-sm transition-all duration-300 ease-out hover:bg-border-light dark:hover:bg-dark-border-bg ${size ? "w-36" : "w-10"}`}
          >
            <Icon size={24} className="shrink-0" />
            <p
              className={`overflow-hidden whitespace-nowrap font-sans font-medium transition-all duration-300 ease-out ${
                size
                  ? "max-w-40 translate-x-0 opacity-100"
                  : "max-w-0 -translate-x-3 opacity-0"
              }`}
            >
              {label}
            </p>

            {!size && (
              <span className="pointer-events-none invisible absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-dark-bg px-3 py-1.5 text-sm text-light-bg opacity-0 shadow-md transition duration-200 group-hover:visible group-hover:opacity-100 dark:bg-box-light dark:text-text-light">
                {label}
              </span>
            )}
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col min-h-0 flex-1 gap-4 overflow-y-auto ${size ? "" : "hidden transition duration-500"}`}
      >
        <div className="flex cursor-pointer items-center gap-1">
          <h3 className="mb-1 text-xs font-medium  text-muted">Recents</h3>
          <ChevronDown
            size={16}
            onClick={() => setRecentSize((prev) => !prev)}
            className={`cursor-pointer transition-transform duration-300 ${recentsize ? "" : "-rotate-90"}`}
          />
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            recentsize
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-2">
              {conversations.map((item) => (
                <p key={item.id} className={`${itemClass} items-center`}>
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-border-light px-2 pt-3 dark:border-dark-border-bg">
        <div className="cursor-pointer">
          <h1>profile</h1>
        </div>
      </div>
    </div>
  );
}
