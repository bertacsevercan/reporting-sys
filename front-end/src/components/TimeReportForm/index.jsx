import React from "react";
import { Form, InputNumber, Button, Select, DatePicker } from "antd";

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

const TimeReportForm = () => {
  const onFinish = (values) => {
    const fieldsValue = {
      ...values,
      time: values["time"].format("YYYY-MM"),
    };
    console.log("Success:", fieldsValue);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="timeReportForm">
      <Form
        {...layout}
        name="timeReportForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="sale"
          label="Sale Amount"
          rules={[
            {
              required: true,
              message: "Please enter the sale amount!",
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Sale Type"
          name="type"
          rules={[
            {
              required: true,
              message: "Please choose the type of sale!",
            },
          ]}
        >
          <Select
            placeholder="Select the type of sale from the list!"
            allowClear
          >
            <Option value="sold">Sold</Option>
            <Option value="rental">Rental</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="time"
          label="Month/Year"
          rules={[
            {
              type: "object",
              required: true,
              message: "Please select month and year of sale!",
            },
          ]}
        >
          <DatePicker picker="month" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TimeReportForm;
