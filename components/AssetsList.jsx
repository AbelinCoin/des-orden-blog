import React from 'react';

function AssetsList({ linksDownload }) {
  return (
    <>
      <h4 className="text-2xl">AssetsList</h4>
      <div className="py-4">
        {linksDownload.map((linkData, index) => (
          <>
            <div key={linkData.id + index}>Título: {linkData.title}</div>
            <a target="_blank" href={linkData.asset.url} rel="noreferrer">
              <p className="text-blue-600">
                Data url: {linkData.asset.url}
              </p>
            </a>
            <div>Imagen: {linkData?.image?.url}</div>
          </>
        ))}
      </div>
    </>

  );
}

export default AssetsList;
