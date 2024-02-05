import React, { useState, useEffect } from "react";
import { mechanicOrders } from "../../../services/member/Mechanic/Mechanic_Orders";
import { authService } from "../../../services/member/auth_service";
import "../Admin/CSS/Bikes.css";

import { useSnackbar } from "notistack";
import { Table } from "@mui/material";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    const mechanic = authService.getCurrentMechanic();
    mechanicOrders
      .getAllOrders(mechanic.userId)
      .then((response) => {
        setOrders(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [columns, setColumns] = useState([
    { title: "OrderId", field: "_id" },
    { title: "Customer Name", field: "customerName" },
    { title: "Bike Name", field: "bikeName" },
    { title: "Bike Number", field: "bikeNumber" },
    { title: "Address", field: "custAddress" },
    { title: "Service Name", field: "serviceName" },
    { title: "Price", field: "servicePrice" },
    { title: "Status", field: "status" },
  ]);

  return (
    <div className="bikes_container">
      <Table
        title="MY ORDERS DATA"
        columns={columns}
        data={orders}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          exportButton: true,
        }}
      />
    </div>
  );
}

export default MyOrders;
