import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportModal from "../ReportModal";
import { Typography, Tabs, Divider } from "antd";
import LocationReport from "../LocationReport";
import EstateTypeReport from "../EstateTypeReport";
import "./style.css";
import { getAllReports } from "../../services/report.service";
import RoomSizeReport from "../RoomSizeReport";
import YearlyReport from "../YearlyReport";
import MonthlyReport from "../MonthlyReport";
import { useTranslation } from "react-i18next";

const { Title } = Typography;
const { TabPane } = Tabs;

const Report = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const { user: currentUser } = useSelector((state) => state.auth);

  const fetchData = useCallback(() => {
    getAllReports(currentUser.id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser.id]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentUser.id, fetchData]);

  return (
    <div className="report">
      <Divider>
        <Title>{t("navbar.titles.title6")}</Title>
      </Divider>
      <div className="addReportButton">
        <ReportModal />
      </div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={t("report.tabs.tab1")} key="1">
          <LocationReport data={data} />
        </TabPane>
        <TabPane tab={t("report.tabs.tab2")} key="2">
          <MonthlyReport data={data} />
        </TabPane>
        <TabPane tab={t("report.tabs.tab3")} key="3">
          <EstateTypeReport data={data} />
        </TabPane>
        <TabPane tab={t("report.tabs.tab4")} key="4">
          <RoomSizeReport data={data} />
        </TabPane>
        <TabPane tab={t("report.tabs.tab5")} key="5">
          <YearlyReport data={data} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Report;
