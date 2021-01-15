import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputNumber, Button, Select } from "antd";
import { createNewReport } from "../../actions/report";

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

const LocationReportForm = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(
      createNewReport(values.sale, values.type, currentUser.id, values.location)
    );
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="locationReportForm">
      <Form
        {...layout}
        name="locationReportForm"
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
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please choose the location!",
            },
          ]}
        >
          <Select placeholder="Select the location from the list!" allowClear>
            <Option value="istanbul">Istanbul</Option>
            <Option value="ankara">Ankara</Option>
            <Option value="kocaeli">Kocaeli</Option>
            <Option value="izmir">İzmir</Option>
            <Option value="konya">Konya</Option>
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

export default LocationReportForm;
