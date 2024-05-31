import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PenaltyForm from "@/components/PenaltyForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { axiosClient } from "@/api/axios";
export default function AdminPayments() {
  const [subs, setSubs] = useState([]);
  const [load, setLoad] = useState(false);
  const [subsNumber, setSubsNumber] = useState({
    total: 0,
    active: 0,
    expired: 0,
  });
  useEffect(() => {
    axiosClient
      .get("api/list_subscriptions")
      .then((response) => {
        setSubs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axiosClient
      .get("api/get_subscriptions_number")
      .then((response) => {
        setSubsNumber(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [load]);

  /* const rows = subs.map((sub) => {
    return {
      id: sub.id,
      username: sub.user.userName,
      card_number: sub.card.cardNumber,
      offer: `${sub.offer.mois} Months`,
      price: `${sub.offer.price} DH`,
      subscription_date: sub.subscription_date,
      expiration_date: sub.expiration_date,
      is_active: sub.is_active,
    };
  }); */

  const rows = [
    {
      id: 1,
      username: "John Doe",
      card_number: "1234567890123456",
      price: "150 DH",
      seller_benefit: "120 DH",
      revenue: "80 DH",
      payment_date: "2022-01-01",
    },
    {
      id: 2,
      username: "David Miller",
      card_number: "1234567890127894",
      price: "182 DH",
      seller_benefit: "145 DH",
      revenue: "37 DH",
      payment_date: "2024-05-30"
    },
    {
      id: 3,
      username: "Bob Johnson",
      card_number: "1234567890121542",
      price: "48 DH",
      seller_benefit: "38 DH",
      revenue: "10 DH",
      payment_date: "2024-05-29"
    },
    {
      id: 4,
      username: "Emily Garcia",
      card_number: "1234567890123178",
      price: "121 DH",
      seller_benefit: "97 DH",
      revenue: "24 DH",
      payment_date: "2024-05-28"
    },
    {
      id: 5,
      username: "Alice Smith",
      card_number: "1234567890129631",
      price: "72 DH",
      seller_benefit: "58 DH",
      revenue: "14 DH",
      payment_date: "2024-05-27"
    },
    {
      id: 6,
      username: "Charlie Brown",
      card_number: "1234567890125287",
      price: "117 DH",
      seller_benefit: "94 DH",
      revenue: "23 DH",
      payment_date: "2024-05-26"
    }
  ]

  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    {
      field: "username",
      headerName: "User",
      minWidth: 120,
      flex: 1.5,
      editable: false,
    },
    {
      field: "card_number",
      headerName: "Card Number",
      minWidth: 120,
      flex: 2,
      editable: false,
    },
    {
      field: "payment_date",
      headerName: "Payment Date",

      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "seller_benefit",
      headerName: "Seller Benefit",
      minWidth: 120,
      flex: 1,
      editable: false,
    },
    {
      field: "revenue",
      headerName: "Revenue",
      minWidth: 120,
      flex: 1,
      editable: false,
    }
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <div className=" flex-grow flex flex-col items-center w-full mx-10 ">
      <h1 className="text-3xl w-full font-semibold mx-10 mt-5">
        Payments
      </h1>
      <div className=" lg:w-[60rem] 2xl:w-[90rem]  bg-white p-3 my-24 rounded-sm border">
        <p className=" flex items-center justify-between text-sm mb-3">
          This is where Payments will be displayed.
        </p>
       {/*  <div className="font-[520] text-[0.9rem] mb-1">
          Subscriptions statictics
        </div>
        <div className="flex flex-row justify-between gap-2 w-full mb-6">
          <div className="flex flex-col justify-center  bg-orange-400 rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Total Subscriptions
            <div className="font-bold text-[1.5rem]">{subsNumber.total}</div>
          </div>
          <div className="flex flex-col justify-center  bg-orange-400 rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Active Subscriptions
            <div className="font-bold text-[1.5rem]">{subsNumber.active}</div>
          </div>
          <div className="flex flex-col justify-center  bg-orange-400 rounded-sm h-18 text-white text-[0.9rem] font-medium p-2 w-1/3">
            Expired Subscriptions
            <div className="font-bold text-[1.5rem]">{subsNumber.expired}</div>
          </div>
        </div> */}
        <div className="">
          <Button
            className={`ml-2 w-28 h-8 hover:bg-red-600 bg-red-500 ${
              selectedRows.length === 0 ? "hidden" : ""
            }`}
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
