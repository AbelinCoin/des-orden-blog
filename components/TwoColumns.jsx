/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const TwoColumnImageAndText = ({ image, title, description, reverse, url, buttonText }) => {
  const imageColumnClasses = 'w-full md:w-1/2 lg:w-5/12';
  const textColumnClasses = 'w-full md:w-1/2 lg:w-7/12 px-12 text-center';

  const content = (
    <>
      <div className={imageColumnClasses}>
        <img src={image} alt={title} className="w-full h-full object-cover object-center rounded-xl" />
      </div>
      <div className={textColumnClasses}>
        <h2 className="text-2xl lg:text-4xl text-secondthegray mb-4">{title}</h2>
        {
          description && <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
        }
        <div className="">
          {
          url && (
          <Link href={url}>
            <a className="w-1/2 font-bold bg-secondthegray px-4 py-2 rounded-lg text-white">
              {buttonText}
            </a>
          </Link>
          )
        }
        </div>
      </div>
    </>
  );

  return (
    <div className={`flex flex-wrap px-8 mx-8 ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
      {content}
    </div>
  );
};

export default TwoColumnImageAndText;
