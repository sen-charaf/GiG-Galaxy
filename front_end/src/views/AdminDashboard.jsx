import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MyPieChart from "@/components/charts/MyPieChart";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SubAreaChart from "@/components/charts/SubAreaChart";
import { DataGrid } from "@mui/x-data-grid";
/* import SolveForm from "@/components/SolveForm"; */
import { axiosClient } from "@/api/axios";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import SolveForm from "@/components/SolveForm";

function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const [usersNumber, setUsersNumber] = useState({
    total: 0,
    subscribed: 0,
    nonSubscribed: 0,
  });
  const [booksNumber, setBooksNumber] = useState({
    total: 0,
    free: 0,
    premium: 0,
  });
  const [reportsNumber, setReportsNumber] = useState({
    solved: 0,
    unsolved: 0,
    total: 0,
  });
  const [revenue, setRevenue] = useState([]);
  const [load, setLoad] = useState(false);
  const [subsTotalNumber, setSubsTotalNumber] = useState(0);
  /* useEffect(() => {
    axiosClient
      .get("api/get_users_number")
      .then((response) => {
        console.log(response.data);
        setUsersNumber({
          total: response.data.total_users,
          subscribed: response.data.subscribed_users,
          nonSubscribed: response.data.non_subscribed_users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      axiosClient
      .get("api/get_reports_number")
      .then((response) => {
        setReportsNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }, []);

  useEffect(() => {
    axiosClient.get("api/get_all_reports").then((response) => {
      setReports(response.data);
    });
  },[load]);

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
  }, []);

  useEffect(() => {
    axiosClient
      .get("api/get_subscriptions_number?option=total")
      .then((response) => {
        console.log(response.data);
        setSubsTotalNumber(response.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosClient
      .get("api/get_revenue").then((response) => {
        setRevenue(response.data);
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
        console.log(error.response.data.error);
      })
  }, []);

  console.log("AdminDashboard");
  const RevenueData = revenue.map((revenue) => {
    return {
      name: revenue.date,
      revenue: revenue.total_revenue,
    };
  })
  const rows = reports.map((report) => {
    return {
      id: report.id,
      comment: report.comment,
      reporter: report.reporter_id,
      reported: report.reported_id,
      message: report.message,
      solved: report.solved,
    };
  });
  const usersPieData = [
    { name: "Subscribed", value: usersNumber.subscribed },
    { name: "Non-Subscribed ", value: usersNumber.nonSubscribed },
  ];
  const booksPieData = [
    { name: "Premium", value: booksNumber.premium },
    { name: "Free", value: booksNumber.free },
  ]; */
  const rows = [
    {
      id: 1,
      comment: "Comment 1",
      reporter: "Reporter 1",
      reported: "Reported 1",
      message: "Message 1",
      solved: true,
    },
    {
      id: 2,
      comment: "Comment 2",
      reporter: "Reporter 2",
      reported: "Reported 2",
      message: "Message 2",
      solved: false,
    },
    {
      id: 3,
      comment: "Comment 3",
      reporter: "Reporter 3",
      reported: "Reported 3",
      message: "Message 3",
      solved: true,
    },
    {
      id: 4,
      comment: "Comment 4",
      reporter: "Reporter 4",
      reported: "Reported 4",
      message: "Message 4",
      solved: false,
    },
    {
      id: 5,
      comment: "Comment 5",
      reporter: "Reporter 5",
      reported: "Reported 5",
      message: "Message 5",
      solved: true,
    },
    {
      id: 6,
      comment: "Comment 6",
      reporter: "Reporter 6",
      reported: "Reported 6",
      message: "Message 6",
      solved: false,
    },
    {
      id: 7,
      comment: "Comment 7",
      reporter: "Reporter 7",
      reported: "Reported 7",
      message: "Message 7",
      solved: true,
    },
    {
      id: 8,
      comment: "Comment 8",
      reporter: "Reporter 8",
      reported: "Reported 8",
      message: "Message 8",
      solved: false,
    },
    {
      id: 9,
      comment: "Comment 9",
      reporter: "Reporter 9",
      reported: "Reported 9",
      message: "Message 9",
      solved: true,
    },
    {
      id: 10,
      comment: "Comment 10",
      reporter: "Reporter 10",
      reported: "Reported 10",
      message: "Message 10",
      solved: false,
    },
  ];
  const usersPieData = [
    { name: "Buyers", value: 60 },
    { name: "Sellers ", value: 40 },
  ];
  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    {
      field: "comment",
      headerName: "Comment",
      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "message",
      headerName: "Message",

      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        if (params.row.solved) {
          return (
            <div className="text-green-500 text-center w-full">
              <div className="font-bold pr-3">Solved</div>
            </div>
          );
        } else {
          return <SolveForm params={params} load={load} setLoad={setLoad} />;
        }
      },
    },
  ];

  return (
    <>
      <div className="sbg-red-500  mx-5">
        <div className="sbg-blue-500 flex  space-x-2 mb-5  mt-5 ">
          <div className="flex flex-col justify-between space-y-3  w-full">
            <div className="flex w-full h-full space-x-3">
              <Card className="w-full p-4 group hover:bg-primary transition-all duration-300 cursor-pointer  flex items-center">
                <CardContent className="flex items-center space-x-4 pl-4 py-0 pr-0 h-full">
                  <GroupOutlinedIcon
                    fontSize="large"
                    className="text-primary  group-hover:text-white w-12 h-12"
                  />
                  <div className="flex flex-col ">
                    <div className="text-4xl group-hover:text-white font-bold">
                      {/*  {usersNumber.total} */} 100
                    </div>
                    <div className="text-gray-500  group-hover:text-white">
                      Total Users
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full p-4 group hover:bg-primary transition-all duration-300 cursor-pointer  flex items-center">
                <CardContent className="flex items-center space-x-4 pl-4 py-0 pr-0 h-full">
                  <HomeRepairServiceOutlinedIcon
                    fontSize="large"
                    className="text-primary group-hover:text-white w-12 h-12"
                  />
                  <div>
                    <div className="text-4xl group-hover:text-white font-bold">
                      {/* {booksNumber.total} */} 50
                    </div>
                    <div className="text-gray-500 group-hover:text-white">
                      Total Services
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full h-full space-x-3">
              <Card className="w-full p-4 group hover:bg-primary transition-all duration-300 cursor-pointer flex items-center">
                <CardContent className="flex items-center space-x-4 pl-4 py-0 pr-0 h-full">
                  <FlagOutlinedIcon
                    fontSize="large"
                    className="text-primary group-hover:text-white w-12 h-12"
                  />
                  <div>
                    <div className="text-4xl font-bold group-hover:text-white">
                      {/* {reportsNumber.total} */} 80
                    </div>
                    <div className="text-gray-500 group-hover:text-white">
                      Total Reports
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full p-4 group hover:bg-primary transition-all duration-300 cursor-pointer  flex items-center">
                <CardContent className="flex items-center space-x-4 pl-4 py-0 pr-0 h-full">
                  <PaidOutlinedIcon
                    fontSize="large"
                    className="text-primary w-12 h-12 group-hover:text-white"
                  />
                  <div>
                    <div className="text-4xl font-bold group-hover:text-white">
                      {/* {subsTotalNumber} */} 200
                    </div>
                    <div className="text-gray-500 group-hover:text-white">
                      Total Payments
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card>
            <CardContent className="pt-1">
              <div className="text-xl font-bold">Users</div>
              <MyPieChart
                w={200}
                h={150}
                cx={"50%"}
                cy={"50%"}
                sizein={40}
                sizeout={70}
                label={false}
                data={usersPieData}
                colors={["#8C41F3", "rgb(209 213 219)"]}
              />
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <span className="text-gray-500 text-xs">Buyer</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-gray-300" />
                  <span className="text-gray-500 text-xs">Seller</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="sbg-green-500 w-full  space-x-3 flex ">
          <Card className="w-4/6 h-full ">
            <div className="text-xl font-bold py-2 pl-2">Daily Revenue</div>
            <CardContent>
              <SubAreaChart
                w={window.innerWidth <= 1534 ? 700 : 600}
                h={580}
                data={"expm"}
                datakey={"revenue"}
              />
            </CardContent>
          </Card>
          <Card className="w-2/6">
            <CardContent>
              <div className="text-xl font-bold py-2 pl-2 ">Report List</div>
              <div className="w-full h-[36rem]">
                <DataGrid
                  sx={{}}
                  getRowHeight={() => 95}
                  rows={rows}
                  columns={columns}
                  columnHeaderHeight={40}
                  initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                  }}
                  pageSizeOptions={[10, 50, 100]}
                  loading={rows.length === 0}
                  rowSelection={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default AdminDashboard;
