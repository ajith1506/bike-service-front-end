import React, { useState, useEffect } from "react";
import { bikeService } from "../../../services/member/Bike/bike_services";
import "./CSS/Bikes.css";
import { useSnackbar } from "notistack";
import { Table } from "@mui/material";

function Bikes() {
  const [bikes, setBikes] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const getAllBikes = () => {
    bikeService
      .getAllBikes()
      .then((response) => {
        setBikes(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllBikes();
  }, []);

  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    { title: "Brand", field: "brand" },
  ]);

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = [];
    if (newData.name === undefined) {
      errorList.push("Please enter car name");
    }

    if (newData.brand === undefined) {
      errorList.push("Please enter Brand name");
    }

    if (errorList.length < 1) {
      bikeService
        .addBike(newData.name, newData.brand)
        .then((res) => {
          let dataToAdd = [...bikes];
          dataToAdd.push(newData);
          setBikes(dataToAdd);
          resolve();
          setErrorMessages([]);
          setIserror(false);
          enqueueSnackbar(res, {
            variant: "success",
          });
        })
        .catch((err) => {
          setErrorMessages(["Cannot add data. Server error!"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  const handleRowDelete = (oldData, resolve) => {
    bikeService
      .deleteBike(oldData._id)
      .then((res) => {
        const dataDelete = [...bikes];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setBikes([...dataDelete]);
        resolve();
        enqueueSnackbar(res, {
          variant: "success",
        });
      })
      .catch((error) => {
        setErrorMessages(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = [];
    if (newData.brand === undefined) {
      errorList.push("Please enter Brand name");
    }
    if (errorList.length < 1) {
      bikeService
        .updateBike(newData._id, newData.brand)
        .then((res) => {
          const dataUpdate = [...bikes];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setBikes([...dataUpdate]);
          resolve();
          setIserror(false);
          setErrorMessages([]);
          console.log(res);
          enqueueSnackbar(res, {
            variant: "success",
          });
        })
        .catch((error) => {
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  return (
    <div className="bikes_container">
      <Table
        title="BIKES DATA"
        columns={columns}
        data={bikes}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              handleRowAdd(newData, resolve);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              handleRowUpdate(newData, oldData, resolve);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              handleRowDelete(oldData, resolve);
            }),
        }}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
      />
    </div>
  );
}

export default Bikes;
