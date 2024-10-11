
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeturedJobs from '../FeturedJobs/FeturedJobs';

const Home = () => {
    return (
        <div>
             <h1 className="text-center font-bold text-3xl capitalize text-green-800">This is Home</h1>

            <Banner></Banner>
           
            <CategoryList></CategoryList>

            <FeturedJobs></FeturedJobs>
        </div>
    );
};

export default Home;