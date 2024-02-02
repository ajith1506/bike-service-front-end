import React, { useEffect, useState } from "react";
import AuthService from "../../services/customer/authentication/auth_service";
import CustomerService from "../../services/customer/customer_service";
import BikeService from "../../services/member/Bike/bike_services";
import PackageService from "../../services/member/package/package_services";
import "./CSS/Order.css";
import { Card, Grid, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

function Order(props) {
  const { match, history } = props;
  const { params } = match;
  const { bikeId, serviceId } = params;
  const [user, setUser] = useState("");
  const [service, setService] = useState([]);
  const [bike, setBike] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getPackage = () => {
    PackageService.findServiceById(serviceId)
      .then((res) => {
        setService(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBike = () => {
    BikeService.findBikeById(bikeId)
      .then((res) => {
        setBike(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = AuthService.getCurrentCustomer();
    console.log(user);
    setUser(user);

    getBike();
    getPackage();
  }, []);

  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    CustomerService.placeOrder(
      user.userId,
      user.name,
      bike.name,
      values.carNumber,
      values.custAddress,
      service.name,
      service.price
    )
      .then((response) => {
        enqueueSnackbar(response, {
          variant: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 className="summary_title">ORDER SUMMARY</h1>
      <Card className="booking_card">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p className="title_subHeading">PERSONAL DETAILS</p>
            <h4>Email Id: {user.email}</h4>
            <h4>Name: {user.name}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <TextField
                    color="primary"
                    variant="outlined"
                    label="Vehicle Number"
                    name="carNumber"
                    margin="normal"
                    inputRef={register({
                      required: "Number is Required",
                    })}
                  />
                  {errors.bikeNumber && (
                    <span className="span">{errors.bikeNumber.message}</span>
                  )}
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <TextField
                    color="primary"
                    variant="outlined"
                    label="Address"
                    multiline
                    name="custAddress"
                    margin="normal"
                    inputRef={register({
                      required: "Address is Required",
                    })}
                  />
                  {errors.custAddress && (
                    <span className="span">{errors.custAddress.message}</span>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className=""
              >
                PLACE ORDER
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p className="title_subHeading">SERVICE DETAILS</p>
            <h3>Service Name: {service.name}</h3>
            <h3>Total Price: {service.price}</h3>
            <h3>Time Required: {service.timeRequired}</h3>
            <h3>Selected Bike: {bike.name}</h3>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Order;
