import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputNumber, Button, Select, DatePicker } from "antd";
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

const ReportForm = () => {
  const [form] = Form.useForm();

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

        <Form.Item
          label="Estate Type"
          name="estate"
          rules={[
            {
              required: true,
              message: "Please choose the type of estate from the list!",
            },
          ]}
        >
          <Select
            placeholder="Select the type of estate from the list!"
            allowClear
          >
            <Option value="single family">Single Family</Option>
            <Option value="apartment">Apartment</Option>
            <Option value="condo">Condo</Option>
            <Option value="co-op">Co-op</Option>
            <Option value="store">Store</Option>
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

        <Form.Item
          name="time"
          label="Date"
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

export default ReportForm;
