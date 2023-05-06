'use client'
import Link from 'next/link';
import { Switch, Spacer, useTheme  } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
// import {MoonIcon, SunIcon} from "@heroicons/react/solid";

const Navbar = () => {
  const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    // const { resolvedTheme, setTheme } = useTheme();
    
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;


  return (
    
<nav className="bg-gray-950 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center">
        <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BREAK</span>
    </div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link href="/" passHref>
        <h1 className="text-white">Home</h1>
      </Link>
      <Link href="/">
        <h1 className='text-white'>Pitch-Deck Consolidator</h1>
      </Link>
      <Link href="/pages/dashboard">
        <h1 className='text-white'>Dashboard</h1>
      </Link>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
