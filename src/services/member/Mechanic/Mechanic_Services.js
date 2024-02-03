import axios from "axios";
import authHeader from "../auth_header";
import mechHeader from "../mech_header";

const API_URL = "http://localhost:3000/admin/mechanic/";
const ACC_URL = "http://localhost:3000/mechanic/account/";

class MechanicService {
  findAll() {
    return axios
      .get(API_URL + "findAll", {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteAccount(id) {
    return axios
      .delete(ACC_URL + `delete/${id}`, {
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

  findAvailable() {
    return axios
      .get(API_URL + "findAvailable", {
        headers: authHeader(),
      })
      .then((res) => {
        return res.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const mechanicService = new MechanicService();
