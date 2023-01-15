import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useCart } from "../hooks/useCart";

function Header() {
  const { theme, setTheme } = useTheme();
  const { openCart } = useCart();

  return (
    <header className="z-10 flex h-10 w-full bg-slate-800/50">
      <nav className="flex h-full w-full items-center justify-between">
        <div className="ml-4 flex">
          <button onClick={() => setTheme("dark")} title="Dark Theme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === "dark" ? "yellow" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <button
            onClick={() => setTheme("light")}
            title="Light Theme"
            className="ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === "light" ? "yellow" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
        <div
          className="ml-10 flex h-full w-14 items-center justify-center
       rounded-3xl bg-slate-200/10 font-bold hover:bg-slate-300 dark:bg-slate-500/10 md:w-20"
        >
          <Link
            className="flex h-full w-full items-center justify-center text-xs text-white md:text-lg"
            href={"/"}
            title="Go to Home"
          >
            Home
          </Link>
        </div>
        <button
          className="show-modal mr-12"
          onClick={openCart}
          title="Your Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
