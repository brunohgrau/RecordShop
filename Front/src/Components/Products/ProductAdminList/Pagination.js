import React from "react";
const Pagination = ({ previousPage, nextPage }) => {
  return (
    <div class="flex mt-4">
      <button
        class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        onClick={() => previousPage()}
        // disabled={!canPreviousPage}
      >
        Previous
      </button>

      <button
        class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        onClick={() => nextPage()}
        // disabled={!canNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
