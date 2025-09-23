import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/data';

const DesktopNavigation = () => {
   return (
      <nav className="hidden md:flex gap-5 xl:gap-6 2xl:gap-7 text-xl bg-white tracking-wider">
         {navLinks.map(({ to, label }: { to: string; label: string }) => (
            <NavigationLink key={to} to={to}>
               {label}
            </NavigationLink>
         ))}
      </nav>
   );
};

function NavigationLink({ to, children }: { to: string; children?: React.ReactNode }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:opacity-70 after:bg-black 
             after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:ease-in-out 
             hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
         }
      >
         {children}
      </NavLink>
   );
}

export default DesktopNavigation;
