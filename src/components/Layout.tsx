import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
   // minus Header height, minus Footer height
   return (
      <div className="flex flex-col min-h-screen overflow-y-scroll">
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};
export default Layout;
