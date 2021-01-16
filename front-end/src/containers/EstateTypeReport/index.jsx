import React, { useRef } from "react";
import { Typography, List, Button } from "antd";
import { createPDF } from "../../services/pdf.service";
import { Bar } from "react-chartjs-2";
import "./style.css";

const { Title, Text } = Typography;

const EstateTypeReport = (props) => {
  const chartRef = useRef(null);

  let familySold = 0;
  let apartSold = 0;
  let condoSold = 0;
  let coopSold = 0;
  let storeSold = 0;

  let familyRental = 0;
  let apartRental = 0;
  let condoRental = 0;
  let coopRental = 0;
  let storeRental = 0;

  const soldList = [];
  const rentalList = [];

  props.data.forEach((report) => {
    if (report.estateType === "single family" && report.saleType === "sold") {
      familySold += report.saleAmount;
    } else if (
      report.estateType === "apartment" &&
      report.saleType === "sold"
    ) {
      apartSold += report.saleAmount;
    } else if (report.estateType === "condo" && report.saleType === "sold") {
      condoSold += report.saleAmount;
    } else if (report.estateType === "co-op" && report.saleType === "sold") {
      coopSold += report.saleAmount;
    } else if (report.estateType === "store" && report.saleType === "sold") {
      storeSold += report.saleAmount;
    }
    if (report.estateType === "single family" && report.saleType === "rental") {
      familyRental += report.saleAmount;
    } else if (
      report.estateType === "apartment" &&
      report.saleType === "rental"
    ) {
      apartRental += report.saleAmount;
    } else if (report.estateType === "condo" && report.saleType === "rental") {
      condoRental += report.saleAmount;
    } else if (report.estateType === "co-op" && report.saleType === "rental") {
      coopRental += report.saleAmount;
    } else if (report.estateType === "store" && report.saleType === "rental") {
      storeRental += report.saleAmount;
    }
  });

  soldList.push(familySold, apartSold, condoSold, coopSold, storeSold);

  rentalList.push(
    familyRental,
    apartRental,
    condoRental,
    coopRental,
    storeRental
  );

  const data = {
    labels: ["Single-Family", "Apartment", "Condo", "Co-op", "Store"],
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
      estate: data.labels[i],
      sale: soldList[i],
    });
    rentalObjList.push({
      estate: data.labels[i],
      sale: rentalList[i],
    });
  }

  const soldListTexts = soldObjList.map(
    (obj) =>
      `With the estate type of ${obj.estate}, there has been ${obj.sale} sales.`
  );

  const rentalListTexts = rentalObjList.map(
    (obj) =>
      `With the estate type of ${obj.estate}, there has been ${obj.sale} rentals.`
  );

  const soldListData = soldListTexts.map((text) => <Text>{text}</Text>);

  const rentalListData = rentalListTexts.map((text) => <Text>{text}</Text>);

  const listData = [...soldListData, ...rentalListData];
  const texts = [...soldListTexts, ...rentalListTexts];

  return (
    <div className="estateTypeReport">
      <div className="titleButton-flex">
        <Title level={3}>Analysis</Title>
        <Button
          onClick={() =>
            createPDF(
              "Sale Report(Estate-Type)",
              "Number of estate sales/rentals made, filtered by estate type.",
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
          header="Number of estate sales/rentals made, filtered by estate type."
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

export default EstateTypeReport;
