import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PenaltyForm from "@/components/PenaltyForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { axiosClient } from "@/api/axios";
import BarChar from "@/components/charts/BarChar";
import BooksPieChart from "@/components/charts/MyPieChart";
import SolveForm from "@/components/SolveForm";

export default function AdminReports() {
  const [load, setLoad] = useState(false);
  const [reports, setReports] = useState([]);
  const [reportsNumber, setReportsNumber] = useState({
    solved: 3,
    unsolved: 2,
    total: 5,
  });
  useEffect(() => {
    axiosClient.get("api/get_all_reports").then((response) => {
      setReports(response.data);
    });
    axiosClient
      .get("api/get_reports_number")
      .then((response) => {
        setReportsNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [load]);

  /* const rows = reports.map((report) => {
    return {
      id: report.id,
      comment: report.comment,
      reporter: report.reporter_id,
      reported: report.reported_id,
      message: report.message,
      solved: report.solved,
    };
  }); */
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
  ];

  /* const rows = [
    {
      id: 1,
      comment: "this is a comment",
      reporter: "John Doe",
      reported: "Jane Doe",
      message: "this is a message",
    },
  ]; */

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
      field: "reporter",
      headerName: "Reporter",
      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "reported",
      headerName: "Reported",
      minWidth: 120,
      flex: 1,
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
      field: "solved",
      headerName: "Solved",
      type: "boolean",
      minWidth: 120,
      flex: 1,
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
  const [selectedRows, setSelectedRows] = useState([]);
  const handleDeleteSelectedRows = () => {
    axiosClient
      .delete("api/delete_reports", { data: { ids: selectedRows } })
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
    <div className=" flex-grow flex flex-col items-center w-full mx-10 ">
      <h1 className="text-3xl w-full font-semibold mx-10 mt-5">Reports</h1>
      <div className=" lg:w-[60rem] 2xl:w-[90rem]  bg-white p-3 my-24 rounded-sm border">
        <p className=" flex items-center justify-between text-sm mb-3">
          This is where Reports will be displayed.
        </p>
        <div className="font-[520] text-[0.9rem] mb-1">Reports statictics</div>
        <div className="flex flex-row justify-between gap-2 w-full mb-6">
          <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Total Reports
            <div className="font-bold text-[1.5rem]">{reportsNumber.total}</div>
          </div>
          <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Unsolved Reports
            <div className="font-bold text-[1.5rem]">
              {reportsNumber.unsolved}
            </div>
          </div>
          <div className="flex flex-col justify-center  bg-primary rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Solved Reports
            <div className="font-bold text-[1.5rem]">
              {reportsNumber.solved}
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
            loading={rows.length === 0}
            onRowSelectionModelChange={(rowSelectionModel) => {
              setSelectedRows(rowSelectionModel);
            }}
            rowSelectionModel={selectedRows}
          />
        </div>
      </div>
    </div>
  );
}
