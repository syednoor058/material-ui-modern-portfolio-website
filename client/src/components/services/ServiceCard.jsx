// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function ServiceCard({ cover, title, desc }) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="w-24 lg:w-40 h-24 lg:h-40 flex justify-center items-center">
        <img src={cover} alt={title} />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <div className="font-bold uppercase font-titleFont text-primaryColor text-base lg:text-2xl">
          {title}
        </div>
        <div className="text-xs lg:text-base text-left xl:text-center">
          {desc}
        </div>
      </div>
    </div>
  );
}
