import authHeader from "../auth_header";

class AdminOrders {
  async findPlacedOrders() {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/order/findPlacedOrder",
        {
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      console.log(data);
      return data.orders;
    } catch (error) {
      console.log(error);
    }
  }

  async assignOrder(orderId, mechanicId) {
    try {
      const response = await fetch(
        `https://admin-l2u6.onrender.com/admin/order/updateOrder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            mechanicId,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async findCompletedOrders() {
    try {
      const response = await fetch(
        "https://order-vlct.onrender.com/order/findCompltedOrders"
      );

      const data = await response.json();
      return data.orders;
    } catch (error) {
      console.log(error);
    }
  }
}

export const adminOrders = new AdminOrders();
