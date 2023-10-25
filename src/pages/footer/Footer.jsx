
const Footer = () => {
    return (
      <div>
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 text-center  md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Wedding Hub Logo */}
              <div className="text-center md:text-left col-span-1 md:col-span-2 lg:col-span-1">
                <h1 className="text-3xl font-bold text-blue-500 ml-5">
                  Event Hub
                </h1>
                <p className="mt-2 text-sm text-gray-400 ml-5">
                  Your ultimate wedding planning resource.
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* About Us */}
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">About Us</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                <p className="text-gray-400">
                  123 Wedding Avenue
                  <br />
                  City, State 12345
                  <br />
                  info@weddinghub.com
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-blue-500 py-4">
            <div className="container mx-auto text-center">
              <p className="text-white">
                &copy; 2023 Wedding Hub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;