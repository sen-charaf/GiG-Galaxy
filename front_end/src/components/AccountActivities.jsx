import React, { useMemo, useState, useCallback, Fragment } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter
  
} from "react-table";
import { useNavigate } from "react-router-dom";
import { FaSearch,
  FaChevronDown,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaSortUp,
  FaSortDown, } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";

function Avatar({ src, alt = "avatar" }) {
  return (
    <img src={src} alt={alt} className="w-8 h-8 rounded-full object-cover" />
  );
}

const users = [
  { name: "Mohamed", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Charaf", image: "./src/assets/ronaldo.jpeg" },
  { name: "Kamal", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Khalid", image: "./src/assets/ronaldo.jpeg" },
  { name: "Fatima", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Said", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Laila", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Ahmed", image: "./src/assets/ronaldo.jpeg" },
  { name: "Amina", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Youssef", image: "./src/assets/ronaldo.jpeg" },
  { name: "Sara", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Mehdi", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Rachid", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Zineb", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Nadia", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Omar", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Asma", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Rania", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "Hassan", image: "./src/assets/IMG-20240207-WA0175.jpg" },
  { name: "fatima", image: "./src/assets/IMG-20240207-WA0175.jpg" },
];

const services = [
  {
    serviceDate: "2024-05-21",
    serviceName: "Service A",
    description: "Description A",
    amount: "$500.00",
  },
  {
    serviceDate: "2024-05-22",
    serviceName: "Service B",
    description: "Description B",
    amount: "$1000.00",
  },
  {
    serviceDate: "2024-05-20",
    serviceName: "Service C",
    description: "Description C",
    amount: "$750.00",
  },
  {
    serviceDate: "2024-06-20",
    serviceName: "Service D",
    description: "Description D",
    amount: "$750.00",
  },
  {
    serviceDate: "2024-06-21",
    serviceName: "Service E",
    description: "Description E",
    amount: "$600.00",
  },
  {
    serviceDate: "2024-06-22",
    serviceName: "Service F",
    description: "Description F",
    amount: "$800.00",
  },
  {
    serviceDate: "2024-07-20",
    serviceName: "Service G",
    description: "Description G",
    amount: "$900.00",
  },
  {
    serviceDate: "2024-07-21",
    serviceName: "Service H",
    description: "Description H",
    amount: "$1100.00",
  },
  {
    serviceDate: "2024-07-22",
    serviceName: "Service I",
    description: "Description I",
    amount: "$1200.00",
  },
  {
    serviceDate: "2024-08-20",
    serviceName: "Service J",
    description: "Description J",
    amount: "$1300.00",
  },
  {
    serviceDate: "2024-08-21",
    serviceName: "Service K",
    description: "Description K",
    amount: "$1400.00",
  },
  {
    serviceDate: "2024-08-22",
    serviceName: "Service L",
    description: "Description L",
    amount: "$1500.00",
  },
  {
    serviceDate: "2024-09-20",
    serviceName: "Service M",
    description: "Description M",
    amount: "$1600.00",
  },
  {
    serviceDate: "2024-09-21",
    serviceName: "Service N",
    description: "Description N",
    amount: "$1700.00",
  },
  {
    serviceDate: "2024-09-22",
    serviceName: "Service O",
    description: "Description O",
    amount: "$1800.00",
  },
  {
    serviceDate: "2024-10-20",
    serviceName: "Service P",
    description: "Description P",
    amount: "$1900.00",
  },
  {
    serviceDate: "2024-10-21",
    serviceName: "Service Q",
    description: "Description Q",
    amount: "$2000.00",
  },
  {
    serviceDate: "2024-10-22",
    serviceName: "Service R",
    description: "Description R",
    amount: "$2100.00",
  },
  {
    serviceDate: "2024-11-20",
    serviceName: "Service S",
    description: "Description S",
    amount: "$2200.00",
  },
  {
    serviceDate: "2024-11-21",
    serviceName: "Service T",
    description: "Description T",
    amount: "$2300.00",
  },
];
function InputGroup7({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div
      className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center pl-3 py-3 text-gray-600 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function GlobalSearchFilter1({
  globalFilter,
  setGlobalFilter,
  className = "",
}) {
  return (
    <InputGroup7
      name="search"
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      label="Search"
      decoration={<FaSearch size="1rem" className="text-gray-400" />}
      className={className}
    />
  );
}




const sortCompleted = (rowA, rowB) => {
  const completedA = rowA.original.completed ? 1 : 0;
  const completedB = rowB.original.completed ? 1 : 0;

  return completedA - completedB;
};

const getColumns = (handleCheckboxChange, navigate) => [
  {
    Header: "Date de Service",
    accessor: "serviceDate",
  },
  {
    Header: "Name",
    accessor: "name",
    width: "300px",
    Cell: ({ row, value }) => (
      <div className="flex gap-2 items-center">
        <Avatar src={row.original.image} alt={`${value}'s Avatar`} />
        <div>{value}</div>
      </div>
    ),
  },
  {
    Header: "Service Name",
    accessor: "serviceName",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "État Service",
    accessor: "completed",
    sortType: sortCompleted,
    disableSortBy: false,
    Cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.original.completed}
        onChange={(e) =>
          handleCheckboxChange(row.original.serviceName, e.target.checked)
        }
      />
    ),
  },
  {
    Header: "Contact",
    accessor: "contact",
    disableSortBy: true,
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/messages`)}
        className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      >
        Contact
      </button>
    ),
  },
];

function SelectMenu1({ value, setValue, options, className = "", disabled }) {
  const selectedOption = useMemo(
    () => options.find((o) => o.id === value),
    [options, value]
  );
  return (
    <Listbox value={value} onChange={setValue} disabled={disabled}>
      <div className={`relative w-full ${className}`}>
        <Listbox.Button
          className={`relative   rounded-xl py-3 pl-3 pr-10 text-base text-gray-700 text-left shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none
          ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white cursor-default"
          }
        
        `}
        >
          <span className="block truncate">{selectedOption.caption}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <FaChevronDown
              size="0.80rem"
              className="text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white text-base shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-3 pl-10 pr-4 ${
                    active ? "bg-purple-500" : ""
                  }`
                }
                value={option.id}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.caption}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                        <FaCheck size="0.5rem" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? "bg-purple-500 text-black" : "text-black-"}
      ${
        !disabled
          ? "bg-purple hover:bg-purple-500 hover:text-black"
          : "text-black bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
            </div>
          }
          onClick={() => gotoPage(pageIndex - 1)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex mr-1">
              <FaChevronRight size="0.6rem" />
            </div>
          }
          onClick={() => gotoPage(pageIndex + 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

function TableComponent({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
  prepareRow,
}) {
  const truncateText = (text, length = 13) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div className="overflow-auto bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
      <table {...getTableProps()} className="min-w-full">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key: headerGroupKey, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={headerGroupKey} {...headerGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key: columnKey, ...columnProps } =
                    column.getHeaderProps(column.getSortByToggleProps());
                  return (
                    <th
                      key={columnKey}
                      {...columnProps}
                      className="min-[1900px]:p-3 pl-3 pr-3 text-start text-xs font-light uppercase cursor-pointer"
                      style={{ width: column.width }}
                    >
                      <div className="flex gap-2 items-center">
                        <div className="text-gray-600">
                          {truncateText(column.render("Header"))}
                        </div>
                        {!column.disableSortBy && (
                          <div className="flex flex-col">
                            <FaSortUp
                              className={`text-sm translate-y-1/2 ${
                                column.isSorted && !column.isSortedDesc
                                  ? "text-purple-500"
                                  : "text-gray-300"
                              }`}
                            />
                            <FaSortDown
                              className={`text-sm -translate-y-1/2 ${
                                column.isSortedDesc
                                  ? "text-purple-500"
                                  : "text-gray-300"
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={headerGroups[0].headers.length}
                className="text-center p-6 text-gray-500"
              >
                Doesn't exist
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps();
              return (
                <tr key={rowKey} {...rowProps} className="hover:bg-gray-100">
                  {row.cells.map((cell, cellIndex) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    const cellValue = cell.value;

                    // Check if the cell contains text or other elements (like images)
                    const isText = typeof cellValue === "string";

                    // Truncate the text if it's longer than 13 characters and the cell contains text
                    const truncatedText =
                      isText && cellValue.length > 13
                        ? truncateText(cellValue)
                        : cell.render("Cell");

                    return (
                      <td
                        key={cellKey}
                        {...cellProps}
                        className="min-[1900px]:p-3 pl-3 pr-3 pt-3 pb-2 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg"
                        title={
                          isText && cellValue.length > 13 ? cellValue : null
                        }
                      >
                        {truncatedText}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function Table1() {
  const navigate = useNavigate();
  const [completedState, setCompletedState] = useState(() =>
    services.reduce((acc, service) => {
      acc[service.serviceName] = service.completed || false;
      return acc;
    }, {})
  );

  const [pageIndex, setPageIndex] = useState(0); // Ajout de l'état pour pageIndex

  const handleCheckboxChange = (serviceName, checked) => {
    setCompletedState((prevState) => ({
      ...prevState,
      [serviceName]: checked,
    }));
  };

  const data = useMemo(
    () =>
      services.map((service, index) => ({
        ...service,
        ...users[index % users.length],
        completed: completedState[service.serviceName],
      })),
    [completedState]
  );

  const columns = useMemo(
    () => getColumns(handleCheckboxChange, navigate),
    [navigate]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    state,
    page: rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5, pageIndex }, // Utilisation de pageIndex de l'état local
    },
    useGlobalFilter, // Ajout de useGlobalFilter
    useSortBy,
    usePagination
  );

  const handleGotoPage = useCallback((page) => {
    setPageIndex(page);
    gotoPage(page);
  }, [gotoPage]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div className="flex-1 sm:flex-none">
          <GlobalSearchFilter1
            className="w-full sm:w-96"
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        <div className="flex-1 sm:flex-none sm:ml-auto">
          <SelectMenu1
            className="w-full sm:w-44"
            value={pageSize}
            setValue={setPageSize}
            options={[
              { id: 5, caption: "5 items per page" },
              { id: 10, caption: "10 items per page" },
            ]}
          />
        </div>
      </div>
      <TableComponent
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
      <div className="flex justify-center">
        <PaginationNav1
          gotoPage={handleGotoPage} // Utilisation de handleGotoPage
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      </div>
    </div>
  );
}
export default function Table1Presentation() {
  return <Table1 />;
}
