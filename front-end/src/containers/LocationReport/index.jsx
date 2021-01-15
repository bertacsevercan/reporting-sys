import React, { useState } from "react";
import { Pagination } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import LocationChart from "../../components/LocationChart";
import "./style.css";

const LocationReport = (props) => {

  return (
    <div className="locationReport">
      {props.data.map((report) => (
         <LocationChart report={report} />
      ))}
   <Pagination defaultCurrent={1} total={5} />
    </div>
  );
};

export default LocationReport;
