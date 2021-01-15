import React, { useState } from "react";
import { Pagination, Typography } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const LocationChart = (props) => {

  return (
    <div className="locationChart">
      <Title level={3}>Written Analysis</Title>
      <Text>
        In the location of {props.report.location}, 
      there has been {props.report.saleAmount} sales, in the type of {props.report.saleType}.
      </Text>

    </div>
  );
};

export default LocationChart;
