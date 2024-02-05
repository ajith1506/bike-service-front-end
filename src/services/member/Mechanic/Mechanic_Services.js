import authHeader from "../auth_header";
import mechHeader from "../mech_header";

class MechanicService {
  async findAll() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/mechanic/findAll",
        {
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAccount(id) {
    try {
      const response = await fetch(
        `https://mechanic-5awn.onrender.com/mechanic/account/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            ...mechHeader(),
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

  async findAvailable() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/mechanic/findAvailable",
        {
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error);
    }
  }
}

export const mechanicService = new MechanicService();
