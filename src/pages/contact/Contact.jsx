const Contact = () => {
    return (
      <div className="bg-gray-200 min-h-screen">
        {/* Header */}
        <header className="bg-white text-black py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-2 text-sm">We'd love to hear from you!</p>
          </div>
        </header>

        {/* Contact Form */}
        <section className="container mx-auto py-10">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 h-40 resize-none"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md focus:outline-none transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default Contact;