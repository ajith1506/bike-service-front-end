import React, { useEffect, useState } from "react";
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

function Brands(props) {
  const { history } = props;
  const [brands, setbrands] = useState([]);
  const [filter, setfilter] = useState("");

  const handleSearchChange = (e) => {
    setfilter(e.target.value);
  };

  const retrieveBrands = () => {
    BikeService.getAllBrands()
      .then((response) => {
        setbrands(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrieveBrands();
  }, []);

  const getBikeCard = (brand) => {
    return (
      <Grid item xs={6} sm={4} md={3} lg={2} key={brand}>
        <Card
          className="card"
          onClick={() => history.push(`cust_home/bikes/${brands[brand]}`)}
        >
          <CardContent>
            <Typography className="text">{brands[brand]}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div className="brand">
      <h1 className="title">Available Brands</h1>
      <div className="search">
        <SearchIcon className="searchIcon" />
        <TextField
          className="searchInput"
          label="Search For Brands"
          onChange={handleSearchChange}
        />
      </div>

      {brands ? (
        <Grid container spacing={3} item className="grid_container">
          {Object.keys(brands).map(
            (brand) => brands[brand].includes(filter) && getBikeCard(brand)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Brands; // Remove BrowserRouter here
