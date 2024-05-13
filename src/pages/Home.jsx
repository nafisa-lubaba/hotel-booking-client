
import { ToastContainer } from 'react-toastify';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Maps from '../components/Maps';
import Newsletter from '../components/Newsletter';
import Reviews from '../components/Reviews';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>

            <h2>this is home</h2>
            <Slider></Slider>
            
            <Cards></Cards>
            <Maps></Maps>
            <Newsletter></Newsletter>
            <Reviews></Reviews>
              <ToastContainer/>
            
        </div>
    );
};

export default Home;