import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Coaches from './pages/Coaches';
import Clients from './pages/Clients';
import Drills from './pages/Drills';
import NotFound from './pages/NotFound';
import { useAppSelector } from './app/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   const theme: string = useAppSelector((state) => state.theme.mode);
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="auth">
                  <Route index element={<Navigate to="login" replace />} />
                  <Route path="login" element={<Auth mode="login" />} />
                  <Route path="signup" element={<Auth mode="signup" />} />
               </Route>
               <Route path="coaches" element={<Coaches />} />
               <Route path="clients" element={<Clients />} />
               <Route path="drills" element={<Drills />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>

         <ToastContainer
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss={false}
            pauseOnHover
            draggable
            theme={theme === 'light' ? 'light' : 'dark'}
            toastStyle={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
         />
      </>
   );
};
export default App;
