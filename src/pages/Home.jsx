
import { ToastContainer } from 'react-toastify';
import Slider from '../components/Slider';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div>

            <h2>this is home</h2>
            <Slider></Slider>
            <Cards></Cards>
              <ToastContainer/>
            
        </div>
    );
};

export default Home;