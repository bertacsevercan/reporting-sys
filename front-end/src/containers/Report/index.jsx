import React from "react";
import LocationReport from "../LocationReport";
import TimeReport from "../TimeReport";
import EstateTypeReport from "../EstateTypeReport";
import RoomSizeReport from "../RoomSizeReport";
import { Typography } from "antd";
import "./style.css";

const { Title } = Typography;

const Report = () => {
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
