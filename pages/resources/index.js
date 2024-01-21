import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getLinksDownload } from '../../services';
import { AssetsList, NewsLetterBanner, CategoriesBar } from '../../components';

function ResourcesPage({ linksDownload }) {
  const [categorySlug, setCategorySlug] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const info = useUser();
  const dowloadPermissions = info.user?.publicMetadata || [];

  // eslint-disable-next-line no-nested-ternary
  const filteredPosts = categorySlug === 'all'
    ? linksDownload
    : linksDownload.filter((link) => link.resourceCategories.some(
      (category) => category.slug === categorySlug,
    ));

  const postsPerPage = filteredPosts.length <= 6 ? filteredPosts.length : 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentLinks = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto lg:px-32 px-2 mb-8">
      <div className="flex flex-col">
        <div className="py-10">
          <h1 className="text-center text-6xl text-secondthegray">Recursos descargables</h1>
          <h4 className="text-xl text-center py-3 text-secondthegray">Nuestros recursos especiales disponibles para su descarga</h4>
        </div>
        <CategoriesBar isResources setCategorySlug={setCategorySlug} setCurrentPage={setCurrentPage} />
        <AssetsList linksDownload={currentLinks} permissions={dowloadPermissions} />
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
