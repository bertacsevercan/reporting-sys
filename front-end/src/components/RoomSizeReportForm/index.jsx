import React from "react";
import { Form, InputNumber, Button, Select } from "antd";

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

const RoomSizeReportForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="roomSizeReportForm">
      <Form
        {...layout}
        name="roomSizeReportForm"
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
          label="Room Size"
          name="room"
          rules={[
            {
              required: true,
              message: "Please choose the number of rooms from the list!",
            },
          ]}
        >
          <Select
            placeholder="Select the number of rooms from the list!"
            allowClear
          >
            <Option value="studio">Studio</Option>
            <Option value="1+1">1+1</Option>
            <Option value="2+1">2+1</Option>
            <Option value="3+1">3+1</Option>
            <Option value="dublex">Dublex</Option>
          </Select>
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

export default RoomSizeReportForm;
