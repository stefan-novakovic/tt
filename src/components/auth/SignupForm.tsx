import { useState } from 'react';
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { signupSchema, type SignupFormValues } from '../../validation/authSchemas';

const SignupForm = () => {
   const [showPassword, setShowPassword] = useState(false);
   let navigate: NavigateFunction = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isValid }
   } = useForm<SignupFormValues>({
      defaultValues: {
         fullName: '',
         email: '',
         password: ''
      },
      resolver: zodResolver(signupSchema)
   });

   const onSubmit = async (data: SignupFormValues) => {
      if (!isValid) return;

      // API call simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Signup data:', data);
      toast.success('Account created successfully!');
      navigate('/');
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         noValidate // Zod validation implemented
         className="w-full max-w-md p-5 md:p-8 text-black dark:text-white rounded-2xl shadow-[0_0_15px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_1px_rgba(255,255,255,0.4)] space-y-[18px]"
      >
         <h2 className="text-3xl font-semibold text-center">Create Account</h2>

         <div>
            <input
               type="text"
               placeholder="Full Name"
               autoComplete="name"
               {...register('fullName')}
               className={`w-full px-3 py-3 border border-gray-300 rounded-lg outline-2 outline-transparent -outline-offset-[1px] ${errors.fullName?.message ? 'border-red-500 hover:outline-red-500 focus-visible:outline-red-500' : 'hover:outline-black dark:hover:outline-white focus-visible:outline-black dark:focus-visible:outline-white border-gray-300'}`}
            />
            {errors.fullName && (
               <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
         </div>

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
               autoComplete="new-password"
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
            className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition cursor-pointer"
         >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
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

export default SignupForm;
