import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Coaches from './pages/Coaches';
import Clients from './pages/Clients';
import Drills from './pages/Drills';
import NotFound from './pages/NotFound';

const App = () => {
   return (
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
   );
};
export default App;
