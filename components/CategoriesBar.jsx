import React, { useState, useEffect } from 'react';
/* import Link from 'next/link'; */

import { getCategories, getResourceCategories } from '../services';

const CategoriesBar = ({ setCategorySlug, setCurrentPage, classNames, isResources }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ slug: 'all' });

  useEffect(() => {
    if (isResources === true) {
      getResourceCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    } else {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategorySlug(category.slug);
    setCurrentPage(1);
  };

  return (
    <div className={`${classNames} flex justify-center pb-7`}>
      <div className="bg-white rounded-lg md:mb-10 shadow-md drop-shadow-2xl">
        <div className="flex flex-wrap gap-2 px-3 py-2 bg-white justify-center">
          <button
            type="button"
            key="view-all"
            className={`buttonBar px-4 py-2 rounded-md font-normal ${selectedCategory?.slug === 'all'
              ? 'bg-red-500 text-white'
              : 'text-black-800'
            } `}
            onClick={() => handleCategoryClick({ name: 'all', slug: 'all' })}
          >
            Ver todos
          </button>
          {categories.map((category) => (
            <button
              type="button"
              key={category.slug}
              className={`buttonBar px-4 py-2 rounded-md font-normal ${selectedCategory?.slug === category.slug
                ? 'bg-red-500 text-white'
                : 'text-black-800'
              } `}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
