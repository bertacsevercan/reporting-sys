import React, { useState } from "react";
import EstateTypeReportForm from "../../components/EstateTypeReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const EstateTypeReport = () => {
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
        Estate Report
      </Button>
      <Modal
        title="Location Based Sale Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EstateTypeReportForm />
      </Modal>
    </>
  );
};

export default EstateTypeReport;
