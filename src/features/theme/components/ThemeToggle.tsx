import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleTheme } from '../themeSlice';

const ThemeToggle = () => {
   const dispatch = useAppDispatch();
   const theme = useAppSelector((state) => state.theme.mode);

   // Determine spin direction based on theme
   const spin: number = theme === 'light' ? 360 : -360;

   return (
      <button
         onClick={() => dispatch(toggleTheme())}
         className="w-[21px] h-[21px] cursor-pointer relative overflow-hidden ml-12"
      >
         <AnimatePresence mode="wait">
            {theme === 'light' ? <SunIcon spin={spin} /> : <MoonIcon spin={spin} />}
         </AnimatePresence>
      </button>
   );
};

function SunIcon({ spin }: { spin: number }) {
   return (
      <motion.div
         key="sun"
         initial={{ rotate: 0, scale: 0 }}
         animate={{ rotate: spin, scale: 1 }}
         exit={{ rotate: spin, scale: 0 }}
         transition={{ duration: 0.55 }}
         className="absolute inset-0 flex items-center justify-center"
      >
         <MdOutlineWbSunny size={21} />
      </motion.div>
   );
}

function MoonIcon({ spin }: { spin: number }) {
   return (
      <motion.div
         key="moon"
         initial={{ rotate: 0, scale: 0 }}
         animate={{ rotate: spin, scale: 1 }}
         exit={{ rotate: spin, scale: 0 }}
         transition={{ duration: 0.55 }}
         className="absolute inset-0 flex items-center justify-center"
      >
         <MdOutlineDarkMode size={21} />
      </motion.div>
   );
}

export default ThemeToggle;
