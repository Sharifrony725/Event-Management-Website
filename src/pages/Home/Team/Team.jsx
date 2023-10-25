import React from 'react';

const Team = () => {
  return (
    <div className="max-w-full mx-auto">
      <section className="mb-5 text-center mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="max-w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Jane Smith</div>
              <p className="text-gray-700 text-base">Event Planner</p>
            </div>
          </div>
          <div className="max-w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/7.jpg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Shopia Amelia</div>
              <p className="text-gray-700 text-base">Designer</p>
            </div>
          </div>
          <div className="max-w-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/3.jpg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bob Johnson</div>
              <p className="text-gray-700 text-base">Photographer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;