import React from 'react';

const About = () => {
    return (
      <div className="bg-white">
        {/* Header */}
        <header className="bg-white text-black pt-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">About Event Hub</h1>
            <p className="mt-2 text-sm">Learn more about us and our mission.</p>
          </div>
        </header>

        {/* About Section */}
        <section className="container mx-auto pb-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed  p-3">
                Event Hub is your premier destination for all your event
                planning needs. With a dedicated team of professionals who are
                passionate about creating memorable moments, we specialize in
                crafting exceptional experiences for a wide range of
                celebrations, including marriage parties, birthday parties, and
                much more. At Event Hub, we understand that each event is
                unique, and we take pride in tailoring our services to your
                specific desires and requirements. Whether you're planning an
                intimate birthday gathering or a grand wedding celebration, our
                team is here to bring your vision to life. Our services
                encompass every aspect of event planning, from venue selection
                and decor to entertainment and catering. We work closely with
                you to ensure that every detail is thoughtfully curated, leaving
                you stress-free and able to fully enjoy your special day. With a
                track record of successful events and a portfolio of delighted
                clients, Event Hub has earned a reputation for excellence in the
                industry. We are committed to providing top-notch service,
                creativity, and professionalism to make your event truly
                exceptional. Choose Event Hub as your trusted partner in turning
                your dreams into reality, and let us make your next celebration
                an unforgettable experience filled with joy, love, and cherished
                memories.
              </p>
            </div>

           
          </div>
        </section>
      </div>
    );
};

export default About;