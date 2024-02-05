import authHeader from "../auth_header";

class Package {
  async getAllServices() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-services/findAll"
      );
      const data = await response.json();
      return data.service;
    } catch (error) {
      console.log(error);
    }
  }

  async addService(serviceType, name, price, description, timeRequired, where) {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/bike-services/addService",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            serviceType,
            name,
            price,
            description,
            timeRequired,
            where,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async updateService(
    id,
    serviceType,
    name,
    price,
    description,
    timeRequired,
    where
  ) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-services/updateService/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            id,
            serviceType,
            name,
            price,
            description,
            timeRequired,
            where,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteService(id) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-services/deleteService/${id}`,
        {
          method: "DELETE",
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      return data.status;
    } catch (error) {
      console.log(error);
    }
  }

  async findServiceById(id) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/bike-services/findById/${id}`
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error);
    }
  }
}

export const packages = new Package();
