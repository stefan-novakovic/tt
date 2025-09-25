import { useState } from 'react';
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { loginSchema, type LoginFormValues } from '../../validation/authSchemas';

const LoginForm = () => {
   const [showPassword, setShowPassword] = useState(false);
   let navigate: NavigateFunction = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isValid }
   } = useForm<LoginFormValues>({
      defaultValues: {
         email: '',
         password: ''
      },
      resolver: zodResolver(loginSchema)
   });

   const onSubmit = async (data: LoginFormValues) => {
      if (!isValid) return;

      // API call simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Login data:', data);
      toast.success('Logged in successfully!');
      navigate('/');
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         noValidate // Zod validation implemented
         className="w-full max-w-md p-5 md:p-8 text-black dark:text-white rounded-2xl shadow-[0_0_15px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_1px_rgba(255,255,255,0.4)] space-y-[18px]"
      >
         <h2 className="text-3xl font-semibold text-center">Login</h2>

         <div>
            <input
               type="email"
               placeholder="Email"
               autoComplete="email"
               {...register('email')}
               className={`w-full px-3 py-3 border border-gray-300 rounded-lg outline-2 outline-transparent -outline-offset-[1px] ${errors.email?.message ? 'border-red-500 hover:outline-red-500 focus-visible:outline-red-500' : 'hover:outline-black dark:hover:outline-white focus-visible:outline-black dark:focus-visible:outline-white border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
         </div>

         <div className={`relative ${errors?.password?.message && 'mb-0'}`}>
            <input
               type={showPassword ? 'text' : 'password'}
               placeholder="Password"
               autoComplete="current-password"
               {...register('password')}
               className={`w-full px-3 py-3 border border-gray-300 rounded-lg outline-2 outline-transparent -outline-offset-[1px] ${errors.password?.message ? 'border-red-500 hover:outline-red-500 focus-visible:outline-red-500' : 'hover:outline-black dark:hover:outline-white focus-visible:outline-black dark:focus-visible:outline-white border-gray-300'}`}
            />
            <button
               type="button"
               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
               onClick={() => setShowPassword(!showPassword)}
            >
               {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
         </div>
         {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

         <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer"
         >
            {isSubmitting ? 'Logging in...' : 'Login'}
         </button>

         <p className="text-center text-gray-500 tracking-tight">
            Don&apos;t have an account?{' '}
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

export default LoginForm;
