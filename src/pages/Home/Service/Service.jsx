import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {title, service_id, img, description, price} = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full  max-h-60" src={img} alt="{img}" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <hr className="mb-2" />
          <div className="card-actions justify-end">
            <p className="text-2xl font-medium">Price: {price} Tk</p>
            <Link
              to={`detail/${service_id}`}
              className="btn btn-primary btn-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;