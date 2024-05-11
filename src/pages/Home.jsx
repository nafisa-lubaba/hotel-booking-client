
import { ToastContainer } from 'react-toastify';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Maps from '../components/Maps';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>

            <h2>this is home</h2>
            <Slider></Slider>
            <Cards></Cards>
            <Maps></Maps>
            <Newsletter></Newsletter>
              <ToastContainer/>
            
        </div>
    );
};

export default Home;