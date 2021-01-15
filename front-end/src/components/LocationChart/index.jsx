import React from "react";
import { Bar } from "react-chartjs-2";

const LocationChart = (props) => {
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

  return (
    <div className="locationChart">
      <Bar
        data={data}
        width={600}
        height={300}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default LocationChart;
