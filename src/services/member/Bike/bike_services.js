import axios from "axios";
import authHeader from "../auth_header";

const API_URL = "http://localhost:3002/admin/bike-func/";

class BikeService {
  getAllBrands() {
    return axios
      .get(API_URL + "findAllBrands")
      .then((response) => {
        //console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getBikesByBrand(brand) {
    console.log("Get Brand: " + brand);
    return axios
      .post(API_URL + "findByBrand", { brand })
      .then((response) => {
        //console.log(response.data.cars[0]);
        return response.data.cars;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllBikes() {
    return axios
      .get(API_URL + "findAll")
      .then((response) => {
        //console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addBike(name, brand) {
    return axios
      .post(
        API_URL + "addBike",
        {
          name,
          brand,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBike(bikeId) {
    return axios
      .delete(API_URL + `deleteBike/${bikeId}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        return res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateBike(bikeId, brand) {
    return axios
      .patch(
        API_URL + `updateBike/${bikeId}`,
        {
          brand,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findBikeById(bikeId) {
    return axios
      .get(API_URL + `findByBike/${bikeId}`)
      .then((response) => {
        return response.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new BikeService();
