import React, { useState } from "react";
import TimeReportForm from "../../components/TimeReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";

const TimeReport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button icon={<PlusOutlined />} type="primary" onClick={showModal}>
        Time Report
      </Button>
      <Modal
        title="Yearly Sales Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TimeReportForm />
      </Modal>
    </>
  );
};

export default TimeReport;
