import mechHeader from "../mech_header";

class MechanicOrders {
  async getInProcessOrders(mechId) {
    try {
      console.log("Method: " + mechId);
      const response = await fetch(
        `https://mechanic-5awn.onrender.com/mechanic/orders/findInProcessOrders/${mechId}`,
        {
          headers: {
            ...mechHeader(),
          },
        }
      );

      const data = await response.json();
      return data.orders;
    } catch (error) {
      console.log(error);
    }
  }

  async updateOrder(orderId, status) {
    try {
      const response = await fetch(
        `https://mechanic-5awn.onrender.com/mechanic/orders/updateOrder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...mechHeader(),
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllOrders(mechId) {
    try {
      const response = await fetch(
        `https://mechanic-5awn.onrender.com/mechanic/orders/findMyOrders/${mechId}`,
        {
          headers: {
            ...mechHeader(),
          },
        }
      );

      const data = await response.json();
      return data.orders;
    } catch (error) {
      console.log(error);
    }
  }
}

export const mechanicOrders = new MechanicOrders();
