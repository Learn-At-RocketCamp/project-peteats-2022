import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function CategoryItem({ item }) {
  const { Id, ProductClassName, imageUrl } = item;

  if (!item) {
    return <h2>LOADING...</h2>;
  }
  /* end of IF(!data) */

  return (
    <li className="w-full pl-8 pb-8 md:w-1/2">
      <Link to={`/shops/tag/${Id}`}>
        {/* /shops/tag/:id */}
        <div className="">
          <img
            className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
            src={imageUrl || Cate}
            alt={ProductClassName || 'CategoryItem'}
          />

          <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
            <span>{Id}</span>
            {ProductClassName}
          </h5>
        </div>
      </Link>
    </li>
  );
}
/* end of CategoryItem() */

CategoryItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of CategoryItem.propTypes */

export default CategoryItem;
