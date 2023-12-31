import { Avatar, Badge, Space } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser, getUserInfo } from "../redux/Login/login.slice";
import AuthService from "../services/auth.service";
import { UserReponse } from "../types/login.interface";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Profile = () => {
  const getUse = useSelector(getUser)
  const helloUser = () => {
    const currentHour = new Date().getHours();
    let hello = "";
    if (currentHour < 12) {
      return (hello = "Good Morning ");
    } else if (currentHour < 18) {
      return (hello = "Good Afternoon ");
    } else {
      return (hello = "Good Evening ");
    }
  };
  return (
    <Space>
      <Avatar shape="square" size={40}></Avatar>
      <Badge size="default" dot color="green">
        {getUse.username}
        <h1>{helloUser()}</h1>
      </Badge>
      {}
    </Space>
  );
};

export default Profile;
