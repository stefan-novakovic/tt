import { BounceLoader } from 'react-spinners';
import PageLayout from '../components/PageLayout';

const Loading = () => {
   return (
      <PageLayout>
         <div className="flex flex-1 justify-center items-center">
            {/* For light/dark modes */}
            {/* <BounceLoader color="#ffffff" size={64} speedMultiplier={0.975} /> */}
            <BounceLoader color="#000000" size={64} speedMultiplier={0.975} />
         </div>
      </PageLayout>
   );
};
export default Loading;
