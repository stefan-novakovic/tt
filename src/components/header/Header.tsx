import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import DesktopNavigation from './DesktopNavigation';
import SidebarMenu from './SidebarMenu';

const Header = () => {
   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

   const closeSidebar = () => {
      setSidebarOpen(false);
   };
   return (
      <header className="relative h-16 md:h-18 w-full max-w-[1920px] mx-auto font-medium flex justify-between items-center px-3 md:px-5 xl:px-7 text-black dark:text-white duration-300 transition-colors">
         {/* Logo image */}
         <div className="w-38 pl-0 pr-16 xl:pr-9">
            <Link
               to="/"
               className="block p-2 xl:p-4 -outline-offset-4"
               aria-label="Return to Home page"
            >
               <img
                  src="/logo-placeholder.png"
                  alt=""
                  className="brightness-0 dark:brightness-200"
               />
            </Link>
         </div>

         {/* Desktop navigation */}
         <DesktopNavigation />

         <div className="w-auto md:w-38 flex justify-end p-2 xl:p-3 tracking-tight">
            {/* Login/Sign Up links */}
            <div className="hidden md:flex">
               <Link to="/auth/login">Login</Link>&nbsp;/&nbsp;
               <Link to="/auth/signup">Sign Up</Link>
            </div>
            {/* Hamburger button */}
            <button
               className="md:hidden"
               onClick={() => setSidebarOpen((prev) => !prev)}
               aria-label="Hamburger menu"
            >
               <GiHamburgerMenu size={30} />
            </button>
         </div>
         {/* Mobile Sidebar menu & overlay */}
         <SidebarMenu sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </header>
   );
};

export default Header;
