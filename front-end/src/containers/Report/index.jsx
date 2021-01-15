import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LocationReport from "../LocationReport";
import TimeReport from "../TimeReport";
import EstateTypeReport from "../EstateTypeReport";
import RoomSizeReport from "../RoomSizeReport";
import { Typography } from "antd";
import "./style.css";
import { fetchReports } from "../../actions/report";

const { Title } = Typography;

const Report = () => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/report");
        const datas = await response.json();
        console.log("fetch", datas);
      }

  useEffect(()=>{
        fetchData();
      dispatch(fetchReports(currentUser.id))
      .then((response)=> {
          console.log(response);
      })     
  }); 

  return (
    <div className="report">
      <Title>Reports</Title>
      <div className="reports-flex">
        <LocationReport />
        <TimeReport />
        <EstateTypeReport />
        <RoomSizeReport />
      </div>
    </div>
  );
};

export default Report;
