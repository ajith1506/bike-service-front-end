import authHeader from "../auth_header";

class BikeService {
  async getAllBrands() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-func/findAllBrands"
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getBikesByBrand(brand) {
    try {
      console.log("Get Brand: " + brand);
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-func/findByBrand",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            brand,
          }),
        }
      );

      const data = await response.json();

      return data.bikes;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllBikes() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-func/findAll"
      );
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async addBike(name, brand) {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-func/addBike",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            name,
            brand,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBike(bikeId) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-func/deleteBike/${bikeId}`,
        {
          method: "DELETE",
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      console.log(data);
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBike(bikeId, brand) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-func/updateBike/${bikeId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            brand,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async findBikeById(bikeId) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-func/findByBike/${bikeId}`
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error);
    }
  }
}

export const bikeService = new BikeService();
