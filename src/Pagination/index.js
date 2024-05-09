import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationComponent = () => {
  const [page, setPage] = useState(1);
  const totalItems = 100; 
  const itemsPerPage = 10; 

  const handleChange = (value) => {
    setPage(value);
    // do slice anything ritika 
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

//   // Determine the range of pages to display as siblings
//   const siblingCount = 2; // Number of siblings on each side of the current page
//   const startPage = Math.max(1, page - siblingCount);
//   const endPage = Math.min(pageCount, page + siblingCount);

//   // Determine whether to display boundary siblings
//   const boundaryCount = 1; // Number of boundary siblings on each end
//   const showStartBoundary = startPage > 1;
//   const showEndBoundary = endPage < pageCount;

  return (
    <div>
      <Pagination
          count={pageCount}
          page={page}
          onChange={(pageNumber) => handleChange(pageNumber)}
          siblings={0}
          boundaryCount={0}
      />
    </div>
  );
};

export default PaginationComponent;
