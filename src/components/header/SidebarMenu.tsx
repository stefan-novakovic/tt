import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import MobileNavigation, { MobileNavigationLink } from './MobileNavigation';

const SidebarMenu = ({
   sidebarOpen,
   closeSidebar
}: {
   sidebarOpen: boolean;
   closeSidebar: VoidFunction;
}) => {
   return (
      <AnimatePresence mode="wait">
         {sidebarOpen && (
            <>
               {/* Overlay */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 bg-black z-40 md:hidden"
                  onClick={closeSidebar}
               />

               {/* Sidebar menu */}
               <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="fixed top-0 right-0 z-50 h-screen w-60 bg-white dark:bg-black flex flex-col md:hidden drop-shadow-xl sidebar-menu-overflow"
               >
                  {/* Close button */}
                  <div>
                     <button
                        className="float-right px-5 pt-[18px] pb-4"
                        onClick={closeSidebar}
                        aria-label="Close hamburger menu"
                     >
                        <IoMdClose size={30} />
                     </button>
                  </div>

                  {/* Mobile navigation & Login/Sign Up links  */}
                  <div className="flex flex-1 flex-col justify-between">
                     <MobileNavigation closeSidebar={closeSidebar} />
                     <div className="flex px-4 py-6 justify-center tracking-wide">
                        <MobileNavigationLink to="/auth/login" closeSidebar={closeSidebar}>
                           Login
                        </MobileNavigationLink>
                        <MobileNavigationLink to="/auth/signup" closeSidebar={closeSidebar}>
                           Sign Up
                        </MobileNavigationLink>
                     </div>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};
export default SidebarMenu;
