'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getLinksDownload } from '../../services';
import { AssetsList, NewsLetterBanner, CategoriesBar } from '../../components';

import { useUser } from "@clerk/nextjs";

function ResourcesPage({ linksDownload, privateMetadata }) {
  const [categorySlug, setCategorySlug] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

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

  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    console.log({ isSignedIn, user, isLoaded });


    const fetchData = async (id) => {
      try {
        const res = await axios.get(
          '/api/private', {
          body: {
              id
          }
        });
        console.log(res, "=============================");
      } catch (err) {
        console.log(err);
      }
    };
    if (isLoaded) {
      fetchData(user.id);
    }
  });

  return (
    <div className="container mx-auto lg:px-32 px-2 mb-8">
      <div className="flex flex-col">
        <div className="py-10">
          <h1 className="text-center text-6xl text-secondthegray">Recursos descargables</h1>
          <h4 className="text-xl text-center py-3 text-secondthegray">Nuestros recursos especiales disponibles para su descarga</h4>
        </div>
        <CategoriesBar isResources setCategorySlug={setCategorySlug} setCurrentPage={setCurrentPage} />
        <AssetsList linksDownload={currentLinks} />
        <NewsLetterBanner />
      </div>
    </div>
  );
}

export default ResourcesPage;

export async function getServerSideProps() {
  const linksDownload = await getLinksDownload();

  // const privateMetadata = await fetch('/api/private');
  return {
    props: {
      linksDownload,
      // privateMetadata,
    },
  };
}
