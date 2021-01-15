import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ReportModal from "../ReportModal";
import { Typography, Tabs } from "antd";
import LocationReport from "../LocationReport";
import "./style.css";
import {getReports} from "../../services/report.service";

const { Title } = Typography;
const { TabPane } = Tabs;


const Report = () => {
    const [data, setData] = useState([]); 
    const { user: currentUser } = useSelector((state) => state.auth);


  useEffect(()=>{
      getReports(currentUser.id)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch(err => console.log(err))
  },[currentUser.id]); 

  return (
    <div className="report">
      <Title>Reports</Title>
      <div className="reports-flex">
        <ReportModal />
      </div>
      <Tabs defaultActiveKey="1">
          <TabPane tab="Location-Based" key="1">
          <LocationReport data={data} />
        </TabPane>
        <TabPane tab="Month-Based" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Estate Type-Based" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Room Size-Based" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Year-Based" key="5">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Report;
