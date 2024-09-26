import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = 5;
  let startPage = Math.max(1, currentPage - Math.floor(range / 2));
  let endPage = Math.min(totalPages, currentPage + Math.floor(range / 2));

  if (endPage - startPage + 1 < range) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + range - 1);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - range + 1);
    }
  }

  return (
    <div id="pagination">
      <div className="pagination mt-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`btn btn-outline-secondary mx-1 ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className="btn btn-secondary ms-2"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
