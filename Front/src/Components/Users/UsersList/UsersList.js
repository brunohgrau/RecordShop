import React, { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import Pagination from "./Pagination";
import { deleteUser } from "../../api";

const UsersList = ({ users }) => {
  const { mutateAsync } = useMutation(deleteUser);
  const queryClient = useQueryClient();

  const remove = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries("users");
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Admin",
        accessor: "isAdmin",
        Cell: ({ row: { original } }) => (
          <div className="text-center "> {original.isAdmin ? "Yes" : "No"}</div>
        )
      },
      {
        accessor: "Delete",
        Header: "delete",
        Cell: ({ row: { original } }) => (
          <div
            className="whitespace-nowrap text-center text-sm font-medium 
          text-red-600 cursor-pointer"
            onClick={() => remove(original._id)}
          >
            Delete
          </div>
        )
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data: users,
      initialState: { pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <>
      {/* <div className="mt-10  md:flex  md:flex-col"> */}

      <div class="py-8">
        <table class="h-full min-w-full leading-normal" {...getTableProps()}>
          <thead className="bg-gray-50">
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th
                        class="px-2 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                        <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              page.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells?.map((cell) => {
                        // Apply the cell props
                        return (
                          <td
                            class="px-3 py-5 border-b border-gray-300 bg-white text-sm"
                            {...cell.getCellProps()}
                          >
                            {
                              // Render the cell contents
                              <p class="text-center  text-gray-900 whitespace-no-wrap">
                                {/* {console.log(cell.getCellProps())} */}
                                {cell.render("Cell")}
                              </p>
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <Pagination previousPage={previousPage} nextPage={nextPage} />
      </div>

      {/* </div> */}
    </>
  );
};

export default UsersList;
