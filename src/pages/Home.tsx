import PageLayout from '../components/PageLayout';
import { Counter } from '../features/counter/components/Counter';
import { formatDate } from '../utils/formatDate';

const Home = () => {
   return (
      <PageLayout>
         <Counter />
         <p>Date: {formatDate(Date.now())}</p>
      </PageLayout>
   );
};
export default Home;
