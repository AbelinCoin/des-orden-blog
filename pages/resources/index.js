import React from 'react';
import { getLinksDownload } from '../../services';
import { AssetsList } from '../../components';

function ResourcesPage({ linksDownload }) {
  console.log(linksDownload);

  return (
    <div className="container mx-auto lg:px-32 px-2 mb-8">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl">Recursos descargables</h1>
        <AssetsList linksDownload={linksDownload} />
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
