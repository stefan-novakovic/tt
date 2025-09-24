import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../../data/data';
import { useAppSelector } from '../../app/hooks';

const MobileNavigation = ({ closeSidebar }: { closeSidebar: VoidFunction }) => {
   return (
      <nav className="flex flex-col text-xl tracking-wider pb-10">
         {navLinks.map(({ to, label }: { to: string; label: string }) => (
            <MobileNavigationLink key={to} to={to} closeSidebar={closeSidebar}>
               {label}
            </MobileNavigationLink>
         ))}
      </nav>
   );
};

export function MobileNavigationLink({
   to,
   closeSidebar,
   children
}: {
   to: string;
   closeSidebar: VoidFunction;
   children?: React.ReactNode;
}) {
   const [mounted, setMounted] = useState<boolean>(false);
   const theme = useAppSelector((state) => state.theme.mode);

   useEffect(() => {
      setMounted(true);
   }, []);

   const handleLinkClick = () => {
      setTimeout(() => {
         closeSidebar();
      }, 500);
   };

   return (
      <NavLink to={to} onClick={handleLinkClick}>
         {({ isActive }) => (
            <div className="relative py-4 px-5">
               {mounted && isActive && (
                  <motion.span
                     layoutId="activeLinkBg"
                     className="absolute inset-0"
                     style={{ background: theme === 'dark' ? 'white' : 'black' }}
                     transition={{ duration: 0.4 }}
                     initial={false} // no animation on first render
                  />
               )}
               <span
                  className={
                     isActive
                        ? 'text-white dark:text-black relative z-10 text-shadow-[2px_1px_1px_black]  dark:text-shadow-[2px_1px_1px_white]'
                        : 'text-black dark:text-white relative z-10'
                  }
               >
                  {children}
               </span>
            </div>
         )}
      </NavLink>
   );
}

export default MobileNavigation;
