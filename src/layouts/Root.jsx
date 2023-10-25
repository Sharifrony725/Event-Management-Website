 import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import Navbar from '../pages/shared/NavBar/Navbar';
// import Detail from '../pages/Home/Detail';
const Root = () => {
    return (
      <div className="max-w-6xl mx-auto font-poppins">
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <Detail></Detail> */}
        <Footer></Footer>
      </div>
    );
};

export default Root;