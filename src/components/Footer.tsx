import ThemeToggle from '../features/theme/components/ThemeToggle';

const Footer = () => {
   return (
      <footer className="w-full max-w-[1920px] mx-auto px-4 py-2 md:py-3 flex justify-between items-center tracking-wider text-black dark:text-white duration-300 transition-colors">
         <div className="w-[21px] h-[21px] mr-12" />

         <div className="text-center text-sm md:text-base">
            TT &copy; {new Date().getUTCFullYear()}{' '}
            <span className="text-nowrap">All Rights Reserved</span>
         </div>

         <ThemeToggle />
      </footer>
   );
};
export default Footer;
