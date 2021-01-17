import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputNumber, Button, Select, DatePicker } from "antd";
import { createNewReport } from "../../actions/report";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 8,
  },
};

const ReportForm = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      time: fieldsValue["time"].format("YYYY-MM"),
    };
    dispatch(
      createNewReport(
        values.sale,
        values.type,
        currentUser.id,
        values.time,
        values.location,
        values.estate,
        values.room
      )
    );
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="ReportForm">
      <Form
        {...layout}
        form={form}
        name="ReportForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="sale"
          label={t("report.texts.text1")}
          rules={[
            {
              required: true,
              message: t("report.messages.message1"),
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber placeholder="0" />
        </Form.Item>

        <Form.Item
          label={t("report.texts.text2")}
          name="type"
          rules={[
            {
              required: true,
              message: t("report.messages.message2"),
            },
          ]}
        >
          <Select placeholder={t("report.messages.message3")} allowClear>
            <Option value="sold">{t("report.values.val1")}</Option>
            <Option value="rental">{t("report.values.val2")}</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t("report.texts.text3")}
          name="location"
          rules={[
            {
              required: true,
              message: t("report.messages.message4"),
            },
          ]}
        >
          <Select placeholder={t("report.messages.message5")} allowClear>
            <Option value="istanbul">Istanbul</Option>
            <Option value="ankara">Ankara</Option>
            <Option value="kocaeli">Kocaeli</Option>
            <Option value="izmir">Izmir</Option>
            <Option value="konya">Konya</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t("report.texts.text4")}
          name="estate"
          rules={[
            {
              required: true,
              message: t("report.messages.message6"),
            },
          ]}
        >
          <Select placeholder={t("report.messages.message7")} allowClear>
            <Option value="single family">{t("report.values.val3")}</Option>
            <Option value="apartment">{t("report.values.val4")}</Option>
            <Option value="condo">{t("report.values.val5")}</Option>
            <Option value="co-op">{t("report.values.val6")}</Option>
            <Option value="store">{t("report.values.val7")}</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t("report.texts.text5")}
          name="room"
          rules={[
            {
              required: true,
              message: t("report.messages.message8"),
            },
          ]}
        >
          <Select placeholder={t("report.messages.message9")} allowClear>
            <Option value="studio">Studio</Option>
            <Option value="1+1">1+1</Option>
            <Option value="2+1">2+1</Option>
            <Option value="3+1">3+1</Option>
            <Option value="dublex">Dublex</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="time"
          label={t("report.texts.text6")}
          rules={[
            {
              type: "object",
              required: true,
              message: t("report.messages.message10"),
            },
          ]}
        >
          <DatePicker
            placeholder={t("report.messages.message11")}
            picker="month"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {t("report.texts.text7")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReportForm;
