import PageLayout from '../components/PageLayout';
import SignupForm from '../components/auth/SignupForm';
import LoginForm from '../components/auth/LoginForm';

interface AuthProps {
   mode: 'signup' | 'login';
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
