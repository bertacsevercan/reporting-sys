import React, { useRef } from "react";
import { Typography, List, Button } from "antd";
import { Bar } from "react-chartjs-2";
import { createPDF } from "../../services/pdf.service";
import "./style.css";

const { Title, Text } = Typography;

const RoomSizeReport = (props) => {
  const chartRef = useRef(null);

  let studioSold = 0;
  let onePlusOneSold = 0;
  let twoPlusOneSold = 0;
  let threePlusOneSold = 0;
  let dublexSold = 0;

  let studioRental = 0;
  let onePlusOneRental = 0;
  let twoPlusOneRental = 0;
  let threePlusOneRental = 0;
  let dublexRental = 0;

  const soldList = [];
  const rentalList = [];

  props.data.forEach((report) => {
    if (report.roomSize === "studio" && report.saleType === "sold") {
      studioSold += report.saleAmount;
    } else if (report.roomSize === "1+1" && report.saleType === "sold") {
      onePlusOneSold += report.saleAmount;
    } else if (report.roomSize === "2+1" && report.saleType === "sold") {
      twoPlusOneSold += report.saleAmount;
    } else if (report.roomSize === "3+1" && report.saleType === "sold") {
      threePlusOneSold += report.saleAmount;
    } else if (report.roomSize === "dublex" && report.saleType === "sold") {
      dublexSold += report.saleAmount;
    }

    if (report.roomSize === "studio" && report.saleType === "rental") {
      studioRental += report.saleAmount;
    } else if (report.roomSize === "1+1" && report.saleType === "rental") {
      onePlusOneRental += report.saleAmount;
    } else if (report.roomSize === "2+1" && report.saleType === "rental") {
      twoPlusOneRental += report.saleAmount;
    } else if (report.roomSize === "3+1" && report.saleType === "rental") {
      threePlusOneRental += report.saleAmount;
    } else if (report.roomSize === "dublex" && report.saleType === "rental") {
      dublexRental += report.saleAmount;
    }
  });

  soldList.push(
    studioSold,
    onePlusOneSold,
    twoPlusOneSold,
    threePlusOneSold,
    dublexSold
  );

  rentalList.push(
    studioRental,
    onePlusOneRental,
    twoPlusOneRental,
    threePlusOneRental,
    dublexRental
  );

  const data = {
    labels: ["Studio", "1+1", "2+1", "3+1", "Dublex"],
    datasets: [
      {
        label: ["Sold"],
        backgroundColor: "blue",
        data: soldList,
      },
      {
        label: ["Rental"],
        backgroundColor: "red",
        data: rentalList,
      },
    ],
  };

  const soldObjList = [];
  const rentalObjList = [];

  for (let i = 0; i < data.labels.length; i++) {
    soldObjList.push({
      room: data.labels[i],
      sale: soldList[i],
    });
    rentalObjList.push({
      room: data.labels[i],
      sale: rentalList[i],
    });
  }

  const soldListTexts = soldObjList.map(
    (obj) =>
      `With the room size of ${obj.room}, there has been ${obj.sale} sales.`
  );

  const rentalListTexts = rentalObjList.map(
    (obj) =>
      `With the room size of ${obj.room}, there has been ${obj.sale} rentals.`
  );

  const soldListData = soldListTexts.map((text) => <Text>{text}</Text>);

  const rentalListData = rentalListTexts.map((text) => <Text>{text}</Text>);

  const texts = [...soldListTexts, ...rentalListTexts];
  const listData = [...soldListData, ...rentalListData];

  return (
    <div className="roomSizeReport">
      <div className="titleButton-flex">
        <Title level={3}>Analysis</Title>
        <Button
          onClick={() =>
            createPDF(
              "Sale Report(Room-Size)",
              "Number of estate sales/rentals made, filtered by room size.",
              texts,
              chartRef
            )
          }
          type="dashed"
        >
          Download PDF
        </Button>
      </div>
      <div className="report-flex">
        <List
          size="small"
          pagination={{ pageSize: 5 }}
          header="Number of estate sales/rentals made, filtered by room type."
          bordered
          dataSource={listData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <div>
          <Bar
            data={data}
            ref={chartRef}
            width={600}
            height={300}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomSizeReport;
