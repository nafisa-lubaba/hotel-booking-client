
import { ToastContainer } from 'react-toastify';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Maps from '../components/Maps';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial'



const Home = () => {
    return (
        <div className=' container mx-auto w-[90%] '>

          
            <Slider></Slider>
            
            <Cards></Cards>
            <Maps></Maps>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
           
              <ToastContainer/>
            
        </div>
    );
};

export default Home;