import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportModal from "../ReportModal";
import { Typography, Tabs, Divider } from "antd";
import LocationReport from "../LocationReport";
import EstateTypeReport from "../EstateTypeReport";
import "./style.css";
import { getReports } from "../../services/report.service";
import RoomSizeReport from "../RoomSizeReport";
import YearlyReport from "../YearlyReport";
import MonthlyReport from "../MonthlyReport";

const { Title } = Typography;
const { TabPane } = Tabs;

const Report = () => {
  const [data, setData] = useState([]);

  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    getReports(currentUser.id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser.id]);

  return (
    <div className="report">
      <Divider>
        <Title>Reports</Title>
      </Divider>
      <div className="addReportButton">
        <ReportModal />
      </div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Location" key="1">
          <LocationReport data={data} />
        </TabPane>
        <TabPane tab="Monthly" key="2">
          <MonthlyReport data={data} />
        </TabPane>
        <TabPane tab="Estate-Type" key="3">
          <EstateTypeReport data={data} />
        </TabPane>
        <TabPane tab="Room-Size" key="4">
          <RoomSizeReport data={data} />
        </TabPane>
        <TabPane tab="Yearly" key="5">
          <YearlyReport data={data} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Report;
