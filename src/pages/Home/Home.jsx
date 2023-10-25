import Banner from '../shared/banner/Banner.jsx';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service.jsx';
import Testimonial from './Testimonial/Testimonial.jsx';
import Team from './Team/Team.jsx';

const Home = () => {
  const services = useLoaderData();
  console.log(services);
    return (
      <div>
        <Banner></Banner>
        {/* service */}
        <div className="my-5">
          <h2 className="my-7 text-center text-3xl font-semibold">
            Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Service key={service.service_id} service={service}></Service>
            ))}
          </div>
        </div>
        {/* testimonial */}
        <div className="my-5">
          <h2 className="my-10 text-center text-3xl font-semibold">
            Testimonials
          </h2>
          <Testimonial></Testimonial>
        </div>
        {/* meet our organaizer */}
        <div className="my-5">
          <h2 className="my-7 text-center text-3xl font-semibold">
            Meet Our Creative Event Organizer
          </h2>
            <Team></Team>
        </div>
      </div>
    );
};

export default Home;