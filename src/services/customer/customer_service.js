import authHeader from "./authentication/auth_header";

class CustomerService {
  async placeOrder(
    customerId,
    customerName,
    bikeName,
    bikeNumber,
    custAddress,
    serviceName,
    servicePrice
  ) {
    try {
      const response = await fetch(
        "https://order-vlct.onrender.com/order/addOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({
            customerId,
            customerName,
            bikeName,
            bikeNumber,
            custAddress,
            serviceName,
            servicePrice,
          }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log(error);
    }
  }

  async findMyOrders(id) {
    try {
      const response = await fetch(
        `https://customer-dw86.onrender.com/customer/order/findOrders/${id}`,
        {
          headers: {
            ...authHeader(),
          },
        }
      );

      const data = await response.json();
      return data.orders;
    } catch (error) {
      console.log(error);
    }
  }

  async findCustomerById(id) {
    try {
      const response = await fetch(
        `https://customer-dw86.onrender.com/customer/account/findCustById/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const customerService = new CustomerService();
