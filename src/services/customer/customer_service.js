import axios from "axios";

import authHeader from "./authentication/auth_header";

const ORDER_URL = "http://localhost:3000/order/";

const CUST_ORDER = "http://localhost:3000/customer/order/";

class CustomerService {
  placeOrder(
    customerId,
    customerName,
    bikeName,
    bikeNumber,
    custAddress,
    serviceName,
    servicePrice
  ) {
    return axios
      .post(
        ORDER_URL + "addOrder",
        {
          customerId,
          customerName,
          bikeName,
          bikeNumber,
          custAddress,
          serviceName,
          servicePrice,
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

  findMyOrders(id) {
    return axios
      .get(CUST_ORDER + `findOrders/${id}`, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data.orders;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findCustomerById(id) {
    return axios
      .get(`http://localhost:3000/customer/account/findCustById/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const customerService = new CustomerService();
