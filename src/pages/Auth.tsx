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
         <div className="flex flex-1 justify-center items-center px-4 py-9">
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
         className="w-full max-w-md p-5 md:p-8 text-black dark:text-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.4)] space-y-5"
      >
         <h2 className="text-3xl font-bold text-center">Login</h2>

         <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg"
            required
         />

         <div className="relative">
            <input
               type={showPassword ? 'text' : 'password'}
               name="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full px-3 py-3 border border-gray-300 rounded-lg pr-10"
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
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer"
         >
            Login
         </button>

         <p className="text-center text-gray-500 tracking-tight">
            Don't have an account?{' '}
            <Link
               to="/auth/signup"
               className="text-blue-500 font-medium hover:underline text-nowrap"
            >
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
         className="w-full max-w-md p-5 md:p-8 text-black dark:text-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.4)] space-y-5"
      >
         <h2 className="text-3xl font-bold text-center">Create Account</h2>

         <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg"
            required
         />

         <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg"
            required
         />

         <div className="relative">
            <input
               type={showPassword ? 'text' : 'password'}
               name="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full px-3 py-3 border border-gray-300 rounded-lg"
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
            className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition cursor-pointer"
         >
            Sign Up
         </button>

         <p className="text-center text-gray-500 tracking-tight">
            Already have an account?{' '}
            <Link
               to="/auth/login"
               className="text-green-700 font-medium hover:underline text-nowrap"
            >
               Login here
            </Link>
         </p>
      </form>
   );
};
