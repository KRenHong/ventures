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
    <nav className="bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">

                <Link href="/" passHref>
                  <h1 className="text-white">Home</h1>
                </Link>

                <Link href="/">
                  <h1 className='text-white'>Pitch-Deck Consolidator</h1>
                </Link>

                <Link href="/pages/dashboard">
                  <h1 className='text-white'>Dashboard</h1>
                </Link>

                {/* <Switch checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} /> */}

                {/* <button
                  onClick={() => theme == "dark"? setTheme('light'): setTheme("dark") }
                  className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
                  Toggle Mode
                </button> */}
                
                {/* <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="m-3"
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                ></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
