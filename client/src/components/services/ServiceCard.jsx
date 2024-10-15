// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function ServiceCard({ title, desc }) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="w-40 lg:w-60 h-40 lg:h-60 border border-accentColor flex justify-center items-center">
        Image
      </div>
      <div className="flex flex-col gap-2 text-center">
        <div className="font-bold uppercase font-titleFont text-titleColor text-base lg:text-2xl">
          {title}
        </div>
        <div className="text-xs lg:text-base">{desc}</div>
      </div>
    </div>
  );
}
