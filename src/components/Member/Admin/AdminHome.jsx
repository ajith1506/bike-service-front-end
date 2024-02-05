import React, { useEffect, useState } from "react";
import "./CSS/AdminHome.css";
import HomeIcon from "@mui/icons-material/Home";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import BallotIcon from "@mui/icons-material/Ballot";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { adminOrders } from "../../../services/member/orders/admin_orders";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const itemList = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      onClick: () => navigate("/admin_home"),
    },
    {
      text: "BIKES",
      icon: <DriveEtaIcon />,
      onClick: () => navigate("/admin_home/bikes"),
    },
    {
      text: "Services",
      icon: <BallotIcon />,
      onClick: () => navigate("/admin_home/packages"),
    },
    {
      text: "Mechanics",
      icon: <SupervisorAccountIcon />,
      onClick: () => navigate("/admin_home/mechanics"),
    },
    {
      text: "Orders",
      icon: <MonetizationOnIcon />,
      onClick: () => navigate("/admin_home/orders"),
    },
    {
      text: "Log Out",
      icon: <ExitToAppIcon />,
      onClick: () => navigate("/login"),
    },
  ];

  const getCompletedOrders = () => {
    adminOrders
      .findCompletedOrders()
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompletedOrders();
  }, []);

  return (
    <div className="admin_home">
      <hr />
      <h1>WELCOME ADMIN</h1>
      <h1>
        Your Total Earnings: &#8377;
        {orders
          .map((order) => order.servicePrice)
          .reduce((prev, next) => prev + next, 0)}
      </h1>
      <hr />

      <Drawer variant="permanent" className="drawer">
        <List>
          {itemList.map((item, index) => {
            return (
              <ListItem button key={item.text} onClick={item.onClick}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default AdminHome;
