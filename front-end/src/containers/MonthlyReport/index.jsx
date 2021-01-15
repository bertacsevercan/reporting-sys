import React from "react";
import { Typography, List } from "antd";
import { Bar } from "react-chartjs-2";
import "./style.css";

const { Title, Text } = Typography;

const MonthlyReport = (props) => {
  let janSold = 0;
  let febSold = 0;
  let marchSold = 0;
  let aprilSold = 0;
  let maySold = 0;
  let juneSold = 0;
  let julySold = 0;
  let augSold = 0;
  let sepSold = 0;
  let octSold = 0;
  let novSold = 0;
  let decSold = 0;

  let janRental = 0;
  let febRental = 0;
  let marchRental = 0;
  let aprilRental = 0;
  let mayRental = 0;
  let juneRental = 0;
  let julyRental = 0;
  let augRental = 0;
  let sepRental = 0;
  let octRental = 0;
  let novRental = 0;
  let decRental = 0;

  const soldList = [];
  const rentalList = [];
  const date = new Date();
  const currentYear = date.getFullYear().toString() + "-";

  props.data.forEach((report) => {
    if (
      report.time.startsWith(currentYear + "01") &&
      report.saleType === "sold"
    ) {
      janSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "02") &&
      report.saleType === "sold"
    ) {
      febSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "03") &&
      report.saleType === "sold"
    ) {
      marchSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "04") &&
      report.saleType === "sold"
    ) {
      aprilSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "05") &&
      report.saleType === "sold"
    ) {
      maySold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "06") &&
      report.saleType === "sold"
    ) {
      juneSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "07") &&
      report.saleType === "sold"
    ) {
      julySold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "08") &&
      report.saleType === "sold"
    ) {
      augSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "09") &&
      report.saleType === "sold"
    ) {
      sepSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "10") &&
      report.saleType === "sold"
    ) {
      octSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "11") &&
      report.saleType === "sold"
    ) {
      novSold += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "12") &&
      report.saleType === "sold"
    ) {
      decSold += report.saleAmount;
    }

    if (
      report.time.startsWith(currentYear + "01") &&
      report.saleType === "rental"
    ) {
      janRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "02") &&
      report.saleType === "rental"
    ) {
      febRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "03") &&
      report.saleType === "rental"
    ) {
      marchRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "04") &&
      report.saleType === "rental"
    ) {
      aprilRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "05") &&
      report.saleType === "rental"
    ) {
      mayRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "06") &&
      report.saleType === "rold"
    ) {
      juneRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "07") &&
      report.saleType === "rental"
    ) {
      julyRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "08") &&
      report.saleType === "rental"
    ) {
      augRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "09") &&
      report.saleType === "rental"
    ) {
      sepRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "10") &&
      report.saleType === "rental"
    ) {
      octRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "11") &&
      report.saleType === "rental"
    ) {
      novRental += report.saleAmount;
    } else if (
      report.time.startsWith(currentYear + "12") &&
      report.saleType === "rental"
    ) {
      decRental += report.saleAmount;
    }
  });

  soldList.push(
    janSold,
    febSold,
    marchSold,
    aprilSold,
    maySold,
    juneSold,
    julySold,
    augSold,
    sepSold,
    octSold,
    novSold,
    decSold
  );

  rentalList.push(
    janRental,
    febRental,
    marchRental,
    aprilRental,
    mayRental,
    juneRental,
    julyRental,
    augRental,
    sepRental,
    octRental,
    novRental,
    decRental
  );

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: ["Sold"],
        backgroundColor: "brown",
        data: soldList,
      },
      {
        label: ["Rental"],
        backgroundColor: "orange",
        data: rentalList,
      },
    ],
  };

  const soldObjList = [];
  const rentalObjList = [];

  for (let i = 0; i < data.labels.length; i++) {
    soldObjList.push({
      month: data.labels[i],
      sale: soldList[i],
    });
    rentalObjList.push({
      month: data.labels[i],
      sale: rentalList[i],
    });
  }

  const soldListData = soldObjList.map((obj) => (
    <Text>
      In the month of <b>{obj.month}</b>, there has been <b>{obj.sale}</b>{" "}
      sales.
    </Text>
  ));

  const rentalListData = rentalObjList.map((obj) => (
    <Text>
      In the month of <b>{obj.month}</b>, there has been <b>{obj.sale}</b>{" "}
      rentals.
    </Text>
  ));

  const listData = [...soldListData, ...rentalListData];

  return (
    <div className="monthlyReport">
      <Title level={3}>Analysis</Title>
      <div className="report-flex">
        <List
          size="small"
          pagination={{ pageSize: 6 }}
          header="Number of estate sales/rentals made, filtered by the months of the current year."
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

export default MonthlyReport;
