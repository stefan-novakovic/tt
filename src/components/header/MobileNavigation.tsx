import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../../data/data';

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
                     style={{ background: 'black' }}
                     transition={{ duration: 0.4 }}
                     initial={false} // no animation on first render
                  />
               )}
               <span
                  className={
                     isActive
                        ? 'text-white relative z-10 text-shadow-[0px_0px_2px_black]'
                        : 'text-black relative z-10'
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
