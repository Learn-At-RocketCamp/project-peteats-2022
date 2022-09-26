import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

// import PacmanLoader from 'react-spinners/PacmanLoader';

import RenderLoading from './RenderLoading';

import apiHelper from '../utils/helpers';
import CategoryItem from './CategoryItem';

function CategoryList({ isFlexWrap }) {
  // #REVIEW: context.Provider?
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    if (!cateData.length) {
      apiHelper.getShopTag().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopTag:::', res?.data?.Data);

          const { Data } = res.data;
          setCateData(Data);
        }
        /* end of IF(Status) */
      });
    }
  }, [cateData]);
  /* end of useEffect() */

  if (!cateData.length) {
    return <RenderLoading />;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* <code>
        LEN::
        {cateData.length}
      </code> */}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap"> */}
      {/* #FIXME: */}
      <ul
        className={`z-10 -ml-4 -mb-10 flex  ${isFlexWrap}  justify-center md:flex-wrap lg:w-[68%]`}
      >
        {/* <ul
        className={`z-10 -ml-4 -mb-10 flex  ${isFlexWrap}
        justify-center bg-slate-400 md:w-[96%] md:flex-col lg:w-[68%]`}
      > */}
        {cateData.map((item) => (
          // console.log('!', item);
          <CategoryItem key={item.Id} item={item} />
        ))}
        {/* end of data.map() */}
      </ul>
    </>
  );
}
/* end of CategoryList() */

CategoryList.defaultProps = {
  isFlexWrap: '',
};

CategoryList.propTypes = {
  isFlexWrap: PropTypes.string,
};
/* end of CategoryList.propTypes */

export default CategoryList;
