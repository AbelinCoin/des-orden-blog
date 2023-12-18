import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PostCard from './PostCard';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidgetHorizontal = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="rounded-lg lg:p-8 p-2 pb-12 mb-8">
      <div className="mb-4 flex flex-row items-center justify-between">
        <div>
          <h3 className="text-secondthegray mb-2 md:text-3xl text-xl">{slug ? 'Artículos relacionados' : 'Artículos recientes'}</h3>
          <h5 className="text-secondthegray mb-2 md:text-lg text-sm">Nuestros articulos mas recientes y rateados</h5>
        </div>
        <p className="mb-2 transition cursor-pointer hover:text-thegray font-normal md:border-b md:text-xl text-md text-right">
          <Link legacyBehavior href="/blog">Ver todos los artículos</Link>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-3">
        {relatedPosts.map((post, index) => (
          <div key={`${post.slug}index`} className="w-full md:w-1/2 lg:w-trecol mb-4 border border-thirdthegray rounded-lg">
            <PostCard key={index} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidgetHorizontal;
