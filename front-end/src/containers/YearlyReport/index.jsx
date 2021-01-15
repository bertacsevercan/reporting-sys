import React from "react";
import { Typography, List } from "antd";
import { Bar } from "react-chartjs-2";
import "./style.css";

const { Title, Text } = Typography;

const YearlyReport = (props) => {
  let firstYearSold = 0;
  let secondYearSold = 0;
  let thirdYearSold = 0;
  let fourthYearSold = 0;
  let fifthYearSold = 0;

  let firstYearRental = 0;
  let secondYearRental = 0;
  let thirdYearRental = 0;
  let fourthYearRental = 0;
  let fifthYearRental = 0;

  const date = new Date();
  const currentYear = date.getFullYear();
  const soldList = [];
  const rentalList = [];

  props.data.forEach((report) => {
    const year = report.time.slice(0, 4);
    if (year === currentYear.toString() && report.saleType === "sold") {
      firstYearSold += report.saleAmount;
    } else if (
      year === (currentYear - 1).toString() &&
      report.saleType === "sold"
    ) {
      secondYearSold += report.saleAmount;
    } else if (
      year === (currentYear - 2).toString() &&
      report.saleType === "sold"
    ) {
      thirdYearSold += report.saleAmount;
    } else if (
      year === (currentYear - 3).toString() &&
      report.saleType === "sold"
    ) {
      fourthYearSold += report.saleAmount;
    } else if (
      year === (currentYear - 4).toString() &&
      report.saleType === "sold"
    ) {
      fifthYearSold += report.saleAmount;
    }

    if (year === currentYear && report.saleType === "rental") {
      firstYearRental += report.saleAmount;
    } else if (
      year === (currentYear - 1).toString() &&
      report.saleType === "rental"
    ) {
      secondYearRental += report.saleAmount;
    } else if (
      year === (currentYear - 2).toString() &&
      report.saleType === "rental"
    ) {
      thirdYearRental += report.saleAmount;
    } else if (
      year === (currentYear - 3).toString() &&
      report.saleType === "rental"
    ) {
      fourthYearRental += report.saleAmount;
    } else if (
      year === (currentYear - 4).toString() &&
      report.saleType === "rental"
    ) {
      fifthYearRental += report.saleAmount;
    }
  });

  soldList.push(
    firstYearSold,
    secondYearSold,
    thirdYearSold,
    fourthYearSold,
    fifthYearSold
  );

  rentalList.push(
    firstYearRental,
    secondYearRental,
    thirdYearRental,
    fourthYearRental,
    fifthYearRental
  );

  const data = {
    labels: [
      currentYear,
      currentYear - 1,
      currentYear - 2,
      currentYear - 3,
      currentYear - 4,
    ],
    datasets: [
      {
        label: ["Sold"],
        backgroundColor: "yellow",
        data: soldList,
      },
      {
        label: ["Rental"],
        backgroundColor: "black",
        data: rentalList,
      },
    ],
  };

  const soldObjList = [];
  const rentalObjList = [];

  for (let i = 0; i < data.labels.length; i++) {
    soldObjList.push({
      year: data.labels[i],
      sale: soldList[i],
    });
    rentalObjList.push({
      year: data.labels[i],
      sale: rentalList[i],
    });
  }

  const soldListData = soldObjList.map((obj) => (
    <Text>
      In the year of <b>{obj.year}</b>, there has been <b>{obj.sale}</b> sales.
    </Text>
  ));

  const rentalListData = rentalObjList.map((obj) => (
    <Text>
      In the year of <b>{obj.year}</b>, there has been <b>{obj.sale}</b>{" "}
      rentals.
    </Text>
  ));

  const listData = [...soldListData, ...rentalListData];

  return (
    <div className="yearlyReport">
      <Title level={3}>Analysis</Title>
      <div className="report-flex">
        <List
          size="small"
          pagination={{ pageSize: 5 }}
          header="Number of estate sales/rentals made, filtered by year."
          bordered
          dataSource={listData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <div>
          <Bar
            data={data}
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

export default YearlyReport;
