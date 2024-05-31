import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PenaltyForm from "@/components/PenaltyForm";
import { axiosClient } from "@/api/axios";
import { useActionData } from "react-router-dom";
import BarChar from "@/components/charts/BarChar";
import { Button } from "@/components/ui/button";
import MyPieChart from "@/components/charts/MyPieChart";
const columns = [
  { field: "id", headerName: "Id", width: 60 },
  { field: "image", headerName: "Image", width: 160, hideable: true },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 60,
    renderCell: (params) => (
      <Avatar>
        <AvatarImage src={params.row.image} />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    ),
    sortable: false,
    filterable: false,
  },
  { field: "username", headerName: "Username", flex: 1 },
  {
    field: "seller",
    headerName: "Seller",
    flex: 0.5,
    type: "boolean",
    editable: true,
  },
  { field: "email", headerName: "Email", width: 180, editable: false },
  {
    field: "gender",
    headerName: "Gender",
    flex: 0.3,
    editable: false,
  },
  {
    field: "birth_date",
    headerName: "Birth Date",
    flex: 0.5,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    flex: 0.2,
    editable: false,
  },
  {
    field: "created_at",
    headerName: "Created_at",
    flex: 0.5,
    editable: false,
  },
  {
    field: "updated_at",
    headerName: "updated_at",
    flex: 0.5,
    editable: false,
  },
  {
    field: "penalties",
    headerName: "Penalties",
    flex: 0.5,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell: (params) => { return params.row.penalties === "normal" && <PenaltyForm params={params}/>},
  },
];
export default function AdminUsers() {
  const [load, setLoad] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [usersNumber, setUsersNumber] = useState({
    total: 4,
    subscribed: 1,
    nonSubscribed: 3,
    male: 3,
    female: 1,
    age: {
      "<18": 0,
      "18-25": 1,
      "26-35": 2,
      "36-45": 1,
      "46>": 0,
    },
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
   image: false,
  });
  useEffect(() => {
    axiosClient
      .get("/get_users")
      .then((response) => {
        console.log(response.data);
        setUserArray(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [load]);
  useEffect(() => {
    axiosClient
      .get("api/get_users_number")
      .then((response) => {
        console.log(response.data);
        setUsersNumber({
          total: response.data.total_users,
          subscribed: response.data.subscribed_users,
          nonSubscribed: response.data.non_subscribed_users,
          male: response.data.male_users,
          female: response.data.female_users,
          age: {
            "<18": response.data["0-18"],
            "18-25": response.data["18-25"],
            "26-35": response.data["26-35"],
            "36-45": response.data["36-45"],
            "46>": response.data["45-99"],
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [load]);

  const handleDeleteSelectedRows = () => {
    axiosClient
      .delete("api/delete_users", { data: { ids: selectedRows } })
      .then((response) => {
        console.log(response.data);
        setSelectedRows([]);
        setLoad(!load);
      })
      .catch((error) => {
        console.error(error);
      });
  };

 /*  const rows = userArray.map((user) => ({
    id: user.id,
    image: user.image,
    username: user.name,
    subscribed: user.is_subscribed,
    email: user.email,
    gender: user.gender === "M" ? "Male" : "Female",
    age: user.age,
    birth_date: user.birth_date,
    created_at: user.created_at,
    updated_at: user.updated_at,
    penalties: "normal", //user.state
  })); */
  const rows = [
    {
      id: 1,
      image: "https://source.unsplash.com/random",
      username: "John Doe",
      seller: "true",
      email: "johndoe@gmail.com",
      gender: "Male",
      age: 25,
      birth_date: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
      penalties: "normal",
    },
    {
      id: 2,
      image: "https://xsgames.co/randomusers/avatar.php?g=male",
      username: "Tom Smith",
      seller: "true",
      email: "janedoe@gmail.com",
      gender: "Male",
      age: 30,
      birth_date: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
      penalties: "normal",
    },
    {
      id: 3,
      image: "https://github.com/shadcn.png",
      username: "Bob Smith",
      seller: "true",
      email: "bobsmith@gmail.com",
      gender: "Male",
      age: 40,
      birth_date: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
      penalties: "normal",
    },
    {
      id: 4,
      image: "https://xsgames.co/randomusers/avatar.php?g=female",
      username: "Alice Johnson",
      seller: "true",
      email: "alicejohnson@gmail.com",
      gender: "Female",
      age: 35,
      birth_date: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
      penalties: "normal",
    },  
  ]
  const usersStateData = [
    { name: "Subscribed", value: usersNumber.subscribed },
    { name: "Non-Subscribed ", value: usersNumber.nonSubscribed },
  ];
  const usersGenderData = [
    { name: "Male", value: usersNumber.male },
    { name: "Female", value: usersNumber.female },
  ];
  const usersAgeData = [
    { name: "<18", value: usersNumber.age["<18"] },
    { name: "18-25", value: usersNumber.age["18-25"] },
    { name: "26-35", value: usersNumber.age["26-35"] },
    { name: "36-45", value: usersNumber.age["36-45"] },
    { name: "46>", value: usersNumber.age["46>"] },
  ];
  console.log(usersAgeData);
  return (
    <>
      <div className=" flex-grow  flex flex-col items-center w-full mx-10">
        <h1 className="text-3xl w-full font-semibold mx-10 mt-5">Users</h1>
        <div className=" lg:w-[60rem] 2xl:w-[90rem]  bg-white p-3 my-24 rounded-sm ">
          <p className="text-sm mb-3">
            This is where user management content will be displayed.
          </p>
          <div className="font-[520] text-[0.9rem] mb-1">User statictics</div>
          <div className="flex flex-row justify-between gap-2 w-full mb-6">
            <div className="flex flex-col justify-center bg-primary rounded-sm h-16 text-white text-[0.9rem] font-medium p-2 w-1/3">
              Total Users
              <div className="font-bold text-[1.5rem]"> {usersNumber.total}  </div>
            </div>
            <div className="flex flex-col justify-center bg-primary rounded-sm h-16 text-white text-[0.9rem] font-medium p-2 w-1/3">
             Buyers
              <div className="font-bold text-[1.5rem]">
                {usersNumber.subscribed}
              </div>
            </div>
            <div className="flex flex-col justify-center bg-primary rounded-sm h-16 text-white text-[0.9rem] font-medium p-2 w-1/3">
              Sellers
              <div className="font-bold text-[1.5rem]">
                {usersNumber.nonSubscribed}
              </div>
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
              rows={rows}
              columns={columns}
              columnHeaderHeight={40}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 50, 100]}
              rowSelection={true}
              loading={userArray.length === 0}
              checkboxSelection
              disableRowSelectionOnClick
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
          <div className="flex flex-row justify-between  mt-5">
            <div className="flex flex-col items-center  p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-1">
                Usere's state
              </div>
              <MyPieChart
                w={200}
                cx={"50%"}
                cy="55%"
                h={250}
                sizein={50}
                data={usersStateData}
                colors={["#8C41F3", "rgb(209 213 219)"]}
              />
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#8C41F3]" />
                  <span className="text-gray-500 text-xs">Sellers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                  <span className="text-gray-500 text-xs">Buyers</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center   p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-1">
                Usere's age
              </div>
              <MyPieChart
                w={200}
                cx={"50%"}
                cy="55%"
                h={250}
                data={usersAgeData}
                colors={["#64d638", "#ff8800", "#FFBB28", "#387cd6", "#e93a3a"]}
                sizein={50}
              />{" "}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#64d638]" />
                  <span className="text-gray-500 text-xs"> {"<18"} </span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#ff8800]" />
                  <span className="text-gray-500 text-xs">{"18-25"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#FFBB28]" />
                  <span className="text-gray-500 text-xs"> {"26-35"} </span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#4e8ee2]" />
                  <span className="text-gray-500 text-xs">{"36-45"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#e93a3a]" />
                  <span className="text-gray-500 text-xs">{"<45"}</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center  p-2">
              <div className="font-[600] text-primary text-[1.5rem] mb-1">
                Usere's gender
              </div>
              <MyPieChart
                w={200}
                cx={"50%"}
                cy="55%"
                h={250}
                sizein={50}
                data={usersGenderData}
                colors={["#47b7f3", "#fb5d92"]}
              />
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#47b7f3]" />
                  <span className="text-gray-500 text-xs">Male</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-[#fb5d92]" />
                  <span className="text-gray-500 text-xs">Female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
