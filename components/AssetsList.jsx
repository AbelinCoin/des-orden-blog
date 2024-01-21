import React, { useState, useRef } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';

function AssetsList({ linksDownload, permissions }) {
  const linkRef = useRef(null);
  const mimeTypeMap = {
    'application/pdf': 'PDF',
    'image/jpeg': 'Imagen',
  };
  // Verify that is has permissions has at least a property
  const hasPermissionToDowload = Object.keys(permissions).length > 0 && permissions?.rol === 'userAllowed';

  // eslint-disable-next-line no-nested-ternary
  const filteredPosts = linksDownload;

  const postsPerPage = filteredPosts.length <= 3 ? filteredPosts.length : 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const AssetCard = ({ linkData, keyData }) => (
    <div key={keyData} className="h-96 relative flex flex-col items-center justify-between w-full md:w-1/2 lg:w-trecol mb-6 border border-gray rounded-lg">
      <div className="relative w-full h-full">
        <Image
          className="object-top w-full object-cover rounded-t-lg z-1 before:block before:bg-red-500 before:w-full before:h-full"
          src={linkData?.image?.url}
        // width={500}
        // height={250}
          fill
        /*         layout="fill" */
          alt={linkData.asset.mimeType}
        />
      </div>
      <div className="z-10 flex flex-col items-center justify-between h-[50%]">
        <ul className="flex flex-wrap lg:mx-0 mx-2 py-3 items-center gap-2">
          <div className="mr-1 mb-1 bg-black text-white rounded-sm px-2 py-1">
            {mimeTypeMap[linkData.asset.mimeType]}
            {' '}
          </div>
          <p>
            {moment(linkData.createdAt).format('MM/DD/YYYY')}
          </p>
        </ul>
        <div className="py-1 text-xl w-4/5 text-center">{linkData.title}</div>
        <a ref={linkRef} className="py-3 mb-2 align-center hidden" target="_blank" href={linkData.asset.url} rel="noreferrer">
          {linkData.asset.url}
        </a>
        <button
          disabled={!hasPermissionToDowload}
          type="button"
          className={
          `transition duration-500 ease transform hover:-translate-y-1 inline-block bg-white text-black border border-black text-md font-medium rounded-sm w-4/3 px-6 py-2 ${hasPermissionToDowload ? 'cursor-pointer' : 'cursor-not-allowed'} my-4`
        }
          onClick={() => linkRef.current.click()}
        >
          Descargar <FontAwesomeIcon className="text-md" icon={faChevronDown} />
        </button>
      </div>

    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-5">
        {
        currentPosts.length > 0 ? currentPosts.map((linkData, index) => (
          <AssetCard keyData={index + linkData.id} linkData={linkData} />
        )) : (
          <div className="flex items-center justify-center w-trecol mx-auto border border-gray rounded-lg h-40">
            No Hay Recursos Disponibles
          </div>
        )
      }
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        elements={filteredPosts}
        elementsPerPage={postsPerPage}
      />
    </>

  );
}

export default AssetsList;
