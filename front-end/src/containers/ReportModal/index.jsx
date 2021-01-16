import React, { useState } from "react";
import ReportForm from "../../components/ReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";

const ReportModal = ({ count, setCount }) => {
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
        Sale Report
      </Button>
      <Modal
        title="Sale Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReportForm />
      </Modal>
    </>
  );
};

export default ReportModal;
