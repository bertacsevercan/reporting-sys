import React, { useState } from "react";
import ReportForm from "../../components/ReportForm";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";
import { useTranslation } from "react-i18next";

const ReportModal = ({ count, setCount }) => {
  const { t } = useTranslation();
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
        {t("report.texts.text8")}
      </Button>
      <Modal
        title="Sale Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Button key="ok" onClick={handleOk}>
            OK
          </Button>
        }
      >
        <ReportForm />
      </Modal>
    </>
  );
};

export default ReportModal;
