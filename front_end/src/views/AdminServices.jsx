import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { axiosClient } from "@/api/axios";
import BarChar from "@/components/charts/BarChar";
import MyPieChart from "@/components/charts/MyPieChart";

export default function AdminServices() {
  const [load, setLoad] = useState(false);
  const [books, setBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [mostRatedBooks, setMostRatedBooks] = useState([]);
  const [booksNumber, setBooksNumber] = useState(10);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    created_at: false,
    updated_at: false,
  });
  const [selectedRows, setSelectedRows] = useState([]);
  useEffect(() => {
    axiosClient
      .get("api/get_books_number")
      .then((response) => {
        console.log(response.data);
        setBooksNumber({
          total: response.data.total_books,
          free: response.data.free_books,
          premium: response.data.premium_books,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [load]);
  useEffect(() => {
    const getBooksHandler = () => {
      axiosClient
        .get("api/get_all_books")
        .then((response) => {
          setBooks(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const getPopularBooksHandler = () => {
      axiosClient
        .get("api/get_all_books?option=popular&limit=5")
        .then((response) => {
          setPopularBooks(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const getMostRatedBooksHandler = () => {
      axiosClient
        .get("api/get_all_books?option=Rating&limit=5")
        .then((response) => {
          setMostRatedBooks(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getBooksHandler();
    getPopularBooksHandler();
    getMostRatedBooksHandler();
  }, [load]);
  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    {
      field: "images",
      headerName: "Images",
      minWidth: 80,
      flex: 0.8,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div className="w-full h-full flex justify-center items-center">
          <Button variant="outline">View</Button>
        </div>
      ),
    },
    {
      field: "title",
      headerName: "Title",

      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "seller",
      headerName: "Seller",
      minWidth: 120,
      flex: 1.5,
      editable: false,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 120,
      flex: 2,
      editable: false,
      renderCell: (params) => (
        <div className="w-full h-full flex justify-center items-center">
          <Button variant="outline">View</Button>
        </div>
      ),
    },

    {
      field: "extras",
      headerName: "Extras",
      minWidth: 120,
      flex: 2,
      editable: false,
      renderCell: (params) => (
        <div className="w-full h-full flex justify-center items-center">
          <Button variant="outline">View</Button>
        </div>
      ),
    },
    {
      field: "rating",
      headerName: "Rating",
      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "delivery_time",
      headerName: "Delivery Time",
      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "category",
      headerName: "Category",

      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "subcategory",
      headerName: "Sub-Category",

      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "created_at",
      headerName: "Created_at",

      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "updated_at",
      headerName: "updated_at",

      minWidth: 120,
      flex: 1,
      editable: false,
    },
  ];

  /* const rows = books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    date_publication: book.date_publication,
    origin: book.origin,
    genre: book.genres.map((g) => g.genreName).join(", "),
    subject: book.subject,
    serie: book.serie,
    isFree: book.isFree,
    description: book.description,
    lang: book.lang,
    file_path: book.filePath,
    bookCover: book.ImageURL,
  })); */
  const rows = [
    {
      id: 1,
      title: "App Development",
      seller: "App Masters",
      category: "Development",
      subcategory: "Mobile App Development",
      extras: "User interface (UI) design",
      rating: 4.9,
      delivery_time: "Varies (quoted)",
      created_at: "2024-05-01",
      updated_at: "2024-05-01",
    },
    {
      id: 2,
      title: "Fantastic Service",
      seller: "Awesome Seller",
      category: "Design",
      subcategory: "Logo Design",
      extras: "Free revisions",
      rating: 5.0,
      delivery_time: "1 day",
      created_at: "2024-05-01",
      updated_at: "2024-05-02",
    },
    {
      id: 3,
      title: "Content Writing Magic",
      seller: "Content Wizards",
      category: "Writing & Translation",
      subcategory: "Blog Writing",
      extras: "SEO optimization",
      rating: 4.8,
      delivery_time: "3 days",
      created_at: "2024-05-01",
      updated_at: "2024-05-03",
    },
    {
      id: 4,
      title: "Social Media Management",
      seller: "Marketing Mavens",
      category: "Marketing & Social Media",
      subcategory: "Social Media Management",
      extras: "Weekly reporting",
      rating: 4.2,
      delivery_time: "Ongoing",
      created_at: "2024-05-01",
      updated_at: "2024-05-04",
    },
    {
      id: 5,
      title: "Website Development",
      seller: "Tech Titans",
      category: "Development",
      subcategory: "Website Development",
      extras: "Mobile responsiveness",
      rating: 4.7,
      delivery_time: "Varies (quoted)",
      created_at: "2024-05-01",
      updated_at: "2024-05-05",
    },
    {
      id: 6,
      title: "Virtual Assistant Support",
      seller: "Efficient Elves",
      category: "Business & Lifestyle",
      subcategory: "Virtual Assistant",
      extras: "Email management",
      rating: 4.9,
      delivery_time: "Variable (based on needs)",
      created_at: "2024-05-01",
      updated_at: "2024-05-06",
    },
    {
      id: 7,
      title: "Data Entry & Analysis",
      seller: "Data Dynamos",
      category: "Administrative & Data",
      subcategory: "Data Entry",
      extras: "Data cleansing",
      rating: 4.3,
      delivery_time: "As per project scope",
      created_at: "2024-05-01",
      updated_at: "2024-05-07",
    },
    {
      id: 8,
      title: "Video Editing & Production",
      seller: "Creative Visionaries",
      category: "Video & Animation",
      subcategory: "Video Editing",
      extras: "Motion graphics",
      rating: 5.0,
      delivery_time: "Varies (quoted)",
      created_at: "2024-05-01",
      updated_at: "2024-05-08",
    },
    {
      id: 9,
      title: "SEO Optimization",
      seller: "Search Engine Gurus",
      category: "Marketing & Social Media",
      subcategory: "SEO Optimization",
      extras: "Keyword research",
      rating: 4.6,
      delivery_at: "Ongoing",
      created_at: "2024-05-01",
      updated_at: "2024-05-09",
    },
    {
      id: 10,
      title: "Music Production & Composition",
      seller: "Sound Architects",
      category: "Audio & Music",
      subcategory: "Music Production",
      extras: "Royalty-free music",
      rating: 4.8,
      delivery_time: "Varies (quoted)",
      created_at: "2024-05-01",
      updated_at: "2024-05-10",
    },
  ];
  const popularServicesData = [
    {
      name: "Music Production & Composition",
      value: 60,
    },
    {
      name: "SEO Optimization",
      value: 40,
    },
    {
      name: "Data Entry & Analysis",
      value: 30,
    },
    {
      name: "Virtual Assistant Support",
      value: 20,
    },
    {
      name: "Website Development",
      value: 5,
    },
  ]
  const popularCategoriesData = [
    {
      name: "Music",
      value: 90,
    },
    {
      name: "SEO",
      value: 70,
    },
    {
      name: "Data",
      value: 30,
    },
    {
      name: "Virtual Assistant",
      value: 25,
    },
    {
      name: "Website",
      value: 5,
    },
  ]
  const popularSubCategoriesData = [
    {
        name: "Website Development",
        value: 60,
    },
    {
        name: "SEO Optimization",
        value: 50,
    },
    {
        name: "Data Entry",
        value: 20,
    },
    {
        name: "Virtual Assistant",
        value: 15,
    },
    {
        name: "Music Production",
        value: 5,
    },
  ]
  const handleDeleteSelectedRows = () => {
    axiosClient
      .delete("api/delete_books", { data: { ids: selectedRows } })
      .then((response) => {
        console.log(response.data);
        setSelectedRows([]);
        setLoad(!load);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className=" flex-grow flex flex-col items-center w-full mx-10 ">
        <h1 className="text-3xl w-full font-semibold mx-10 mt-5">Services</h1>
        <div className=" lg:w-[60rem] 2xl:w-[90rem]  bg-white p-3 my-24 rounded-sm border">
          <p className=" flex items-center justify-between text-sm mb-3">
            This is where service management content will be displayed.
          </p>
          <div className="font-[520] text-[0.9rem] mb-1">
            Service statictics
          </div>
          <div className="flex flex-row justify-between gap-2 w-full mb-6">
            <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
              Total Services
              <div className="font-bold text-[1.5rem]">{booksNumber}</div>
            </div>
            <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
              Total Orders
              <div className="font-bold text-[1.5rem]">{/* {booksNumber} */} 50</div>
            </div>
            <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
              Total Reviews
              <div className="font-bold text-[1.5rem]">{/* {booksNumber} */} 20</div>
            </div>
          </div>
          <div className="">
            <Button
              className={`ml-2 w-28 h-8 hover:bg-red-600 bg-red-500 ${
                selectedRows.length === 0 ? "hidden" : ""
              }`}
              onClick={handleDeleteSelectedRows}
            >
              Delete
            </Button>
            <DataGrid
              sx={{ m: 1 }}
              autoHeight
              getRowHeight={() => 95}
              rows={rows}
              columns={columns}
              columnHeaderHeight={40}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 50, 100]}
              checkboxSelection
              disableRowSelectionOnClick
              loading={0}
              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
              }
              onRowSelectionModelChange={(rowSelectionModel) => {
                setSelectedRows(rowSelectionModel);
              }}
              rowSelectionModel={selectedRows}
            />
          </div>
          <div className="flex flex-row space-x-3  mt-8">
            <div className=" p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-5">
                Top Ordered Services
              </div>
              <BarChar
                w={window.innerWidth <= 1534 ? 280 : 450}
                h={300}
                data={popularServicesData}
              />
            </div>
            <div className="p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-5">
                Most Popular Categories
              </div>
              <BarChar
                w={window.innerWidth <= 1534 ? 280 : 450}
                h={300}
                data={popularCategoriesData}
              />
            </div>
            <div className="  p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-5">
                Most Popular Sub-Categories
              </div>
              <BarChar
                w={window.innerWidth <= 1534 ? 280 : 450}
                h={300}
                data={popularSubCategoriesData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
