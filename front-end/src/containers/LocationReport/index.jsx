import React, { useState } from "react";
import LocationReportForm from "../../components/LocationReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";

const LocationReport = () => {
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
        Location Report
      </Button>
      <Modal
        title="Location Based Sale Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LocationReportForm />
      </Modal>
    </>
  );
};

export default LocationReport;
