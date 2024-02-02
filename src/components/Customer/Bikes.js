import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import {
  Grid,
  CardContent,
  Card,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./CSS/Brands.css";
import BikeService from "../../services/member/Bike/bike_services";

function Bikes(props) {
  const { match, history } = props;
  const { params } = match;
  const { brand } = params;

  const [bikes, setBikes] = useState([]);
  const [filter, setfilter] = useState("");

  const handleSearchChange = (e) => {
    setfilter(e.target.value);
  };

  const retrieveBikes = () => {
    BikeService.getCarsByBrand(brand)
      .then((response) => {
        setBikes(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrieveBikes();
  }, []);

  const getCarCards = (bike) => {
    return (
      <Grid item xs={6} sm={4} md={3} lg={2} key={bike._id}>
        <Card
          className="card"
          onClick={() => history.push(`/cust_home/services/${bike._id}`)}
        >
          <CardContent>
            <Typography>{bike.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <CarouselComponent />
      <div className="brand">
        <h1 className="title">{`Available ${brand} Bikes`}</h1>

        <div className="search">
          <SearchIcon className="searchIcon" />
          <TextField
            className="searchInput"
            label="Search for Cars"
            onChange={handleSearchChange}
          />
        </div>

        <Grid container spacing={3} className="grid_container">
          {bikes.map((bike) => bike.name.includes(filter) && getCarCards(bike))}
        </Grid>
      </div>
    </div>
  );
}

export default Bikes;
