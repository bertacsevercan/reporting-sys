import React, { useState } from "react";
import RoomSizeReportForm from "../../components/RoomSizeReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const RoomSizeReport = () => {
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
        Room Report
      </Button>
      <Modal
        title="Room-Size Based Sale Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RoomSizeReportForm />
      </Modal>
    </>
  );
};

export default RoomSizeReport;
