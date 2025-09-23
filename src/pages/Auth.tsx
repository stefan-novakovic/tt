import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom'; // assuming react-router-dom for links

interface AuthProps {
   mode: 'login' | 'signup';
}

export default function Auth({ mode }: AuthProps) {
   return (
      <PageLayout>
         <div className="flex justify-center items-center min-h-[80vh]">
            {mode === 'signup' ? <SignupForm /> : <LoginForm />}
         </div>
      </PageLayout>
   );
}

// ------------------- LOGIN FORM -------------------
const LoginForm = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      console.log({ email, password });
   };

   return (
      <form
         onSubmit={handleLogin}
         className="w-full max-w-md p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.075)] space-y-6"
      >
         <h2 className="text-3xl font-bold text-center text-black">Login</h2>

         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
         />

         <div className="relative">
            <input
               type={showPassword ? 'text' : 'password'}
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
               required
            />
            <button
               type="button"
               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
               onClick={() => setShowPassword(!showPassword)}
            >
               {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
         </div>

         <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
         >
            Login
         </button>

         <p className="text-center text-gray-500">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-blue-600 font-medium hover:underline">
               Sign Up here
            </Link>
         </p>
      </form>
   );
};

// ------------------- SIGNUP FORM -------------------
const SignupForm = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const handleSignup = (e: React.FormEvent) => {
      e.preventDefault();
      console.log({ name, email, password });
   };

   return (
      <form
         onSubmit={handleSignup}
         className="w-full max-w-md p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.075)] space-y-6"
      >
         <h2 className="text-3xl font-bold text-center text-black">Create Account</h2>

         <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
         />

         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
         />

         <div className="relative">
            <input
               type={showPassword ? 'text' : 'password'}
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
               required
            />
            <button
               type="button"
               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
               onClick={() => setShowPassword(!showPassword)}
            >
               {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
         </div>

         <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
         >
            Sign Up
         </button>

         <p className="text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-green-600 font-medium hover:underline">
               Login here
            </Link>
         </p>
      </form>
   );
};
