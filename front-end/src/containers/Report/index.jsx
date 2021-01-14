import React from "react";
import LocationReport from "../LocationReport";
import TimeReport from "../TimeReport";
import EstateTypeReport from "../EstateTypeReport";
import { Typography } from "antd";
import "./style.css";

const { Title } = Typography;

const Report = () => {
  return (
    <div className="report">
      <Title>Report</Title>
      <LocationReport />
      <TimeReport />
      <EstateTypeReport />
    </div>
  );
};

export default Report;
