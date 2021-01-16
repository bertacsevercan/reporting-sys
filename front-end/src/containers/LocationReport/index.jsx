import React, { useRef } from "react";
import { Typography, List, Button } from "antd";
import { Bar } from "react-chartjs-2";
import { createPDF } from "../../services/pdf.service";
import "./style.css";

const { Title, Text } = Typography;

const LocationReport = (props) => {
  const chartRef = useRef(null);

  let izmirSold = 0;
  let istanbulSold = 0;
  let ankaraSold = 0;
  let konyaSold = 0;
  let kocaeliSold = 0;

  let izmirRental = 0;
  let istanbulRental = 0;
  let ankaraRental = 0;
  let konyaRental = 0;
  let kocaeliRental = 0;

  const soldList = [];
  const rentalList = [];

  props.data.forEach((report) => {
    if (report.location === "izmir" && report.saleType === "sold") {
      izmirSold += report.saleAmount;
    } else if (report.location === "istanbul" && report.saleType === "sold") {
      istanbulSold += report.saleAmount;
    } else if (report.location === "ankara" && report.saleType === "sold") {
      ankaraSold += report.saleAmount;
    } else if (report.location === "konya" && report.saleType === "sold") {
      konyaSold += report.saleAmount;
    } else if (report.location === "kocaeli" && report.saleType === "sold") {
      kocaeliSold += report.saleAmount;
    }
    if (report.location === "izmir" && report.saleType === "rental") {
      izmirRental += report.saleAmount;
    } else if (report.location === "istanbul" && report.saleType === "rental") {
      istanbulRental += report.saleAmount;
    } else if (report.location === "ankara" && report.saleType === "rental") {
      ankaraRental += report.saleAmount;
    } else if (report.location === "konya" && report.saleType === "rental") {
      konyaRental += report.saleAmount;
    } else if (report.location === "kocaeli" && report.saleType === "rental") {
      kocaeliRental += report.saleAmount;
    }
  });

  soldList.push(izmirSold, istanbulSold, ankaraSold, konyaSold, kocaeliSold);

  rentalList.push(
    izmirRental,
    istanbulRental,
    ankaraRental,
    konyaRental,
    kocaeliRental
  );

  const data = {
    labels: ["Izmir", "Istanbul", "Ankara", "Konya", "Kocaeli"],
    datasets: [
      {
        label: ["Sold"],
        backgroundColor: "purple",
        data: soldList,
      },
      {
        label: ["Rental"],
        backgroundColor: "green",
        data: rentalList,
      },
    ],
  };

  const soldObjList = [];
  const rentalObjList = [];

  for (let i = 0; i < data.labels.length; i++) {
    soldObjList.push({
      location: data.labels[i],
      sale: soldList[i],
    });
    rentalObjList.push({
      location: data.labels[i],
      sale: rentalList[i],
    });
  }

  const soldListTexts = soldObjList.map(
    (obj) =>
      `In the location of ${obj.location}, there has been ${obj.sale} sales.`
  );

  const rentalListTexts = soldObjList.map(
    (obj) =>
      `In the location of ${obj.location}, there has been ${obj.sale} rentals.`
  );

  const soldListData = soldListTexts.map((text) => <Text>{text}</Text>);

  const rentalListData = rentalListTexts.map((text) => <Text>{text}</Text>);

  /*   const soldListData = soldObjList.map((obj) => (
    <Text>
      In the location of <b>{obj.location}</b>, there has been <b>{obj.sale}</b>{" "}
      sales.
    </Text>
  ));

  const rentalListData = rentalObjList.map((obj) => (
    <Text>
      In the location of <b>{obj.location}</b>, there has been <b>{obj.sale}</b>{" "}
      rentals.
    </Text>
  ));
 */

  const texts = [...soldListTexts, ...rentalListTexts];
  const listData = [...soldListData, ...rentalListData];

  return (
    <div className="locationReport">
      <div className="titleButton-flex">
        <Title level={3}>Analysis</Title>
        <Button
          onClick={() =>
            createPDF(
              "Sale Report(Location)",
              "Number of estate sales/rentals made, filtered by location.",
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
          header="Number of estate sales/rentals made, filtered by location."
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

export default LocationReport;
