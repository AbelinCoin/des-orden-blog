import React from 'react';
import { getLinksDownload } from '../../services';
import { AssetsList, NewsLetterBanner/* , Pagination */ } from '../../components';

function ResourcesPage({ linksDownload }) {
  console.log(linksDownload);

  return (
    <div className="container mx-auto lg:px-32 px-2 mb-8">
      <div className="flex flex-col">
        <div className="py-10">
          <h1 className="text-center text-6xl text-secondthegray">Recursos descargables</h1>
          <h4 className="text-xl text-center py-3 text-secondthegray">Nuestros recursos especiales disponibles para su descarga</h4>
        </div>
        <AssetsList linksDownload={linksDownload} />
        {/* <Pagination /> */}
        <NewsLetterBanner />
      </div>
    </div>
  );
}

export default ResourcesPage;

export async function getServerSideProps() {
  const linksDownload = await getLinksDownload();
  return {
    props: {
      linksDownload,
    },
  };
}
