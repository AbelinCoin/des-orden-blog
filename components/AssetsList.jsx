import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AssetsList({ linksDownload }) {
  const mimeTypeMap = {
    'application/pdf': 'PDF',
    'image/jpeg': 'Imagen',
  };
  const AssetCard = ({ linkData, keyData }) => (
    <div key={keyData} className="relative flex flex-col items-center justify-between w-full md:w-1/2 lg:w-trecol mb-6 border border-thirdthegray rounded-lg">
      <Image
        className="object-top absolute h-80 w-full object-cover rounded-t-lg"
        src={linkData?.image?.url}
        width={500}
        height={250}
/*         layout="fill" */
        alt={linkData.asset.mimeType}
      />
      <ul className="flex flex-wrap lg:mx-0 mx-2 py-3">
        <div className="mr-1 mb-1 bg-black text-white rounded-sm px-2 py-1">{mimeTypeMap[linkData.asset.mimeType]}</div>
      </ul>
      <div className="py-1 text-xl w-4/5 text-center">{linkData.title}</div>
      <a className="py-3 mb-2 align-center" target="_blank" href={linkData.asset.url} rel="noreferrer">
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-white text-black border border-black text-md font-medium rounded-md w-4/3 px-6 py-2 cursor-pointer">
          Descargar <FontAwesomeIcon className="text-xl" icon={faChevronDown} />
        </span>
      </a>
    </div>
  );

  return (
    <>
      <div className="py-4 flex flex-col md:flex-row gap-x-3 justify-center">
        {linksDownload.map((linkData, index) => (
          <AssetCard keyData={index + linkData.id} linkData={linkData} />
        ))}
      </div>
    </>

  );
}

export default AssetsList;
