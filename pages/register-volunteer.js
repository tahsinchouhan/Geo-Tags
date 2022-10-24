import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
} from "antd";
import React from "react";
const RegisterVolunteer = () => {
  return (
    <section className="bg-gray-50 pt-28 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 mx-auto bg-white lg:w-1/2 sm:w-[75%] w-full pt-5 pb-2 shadow-xl shadow-slate-300">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img
            className="w-12 h-12 mr-2"
            src="/assets/images/logo.png"
            alt="logo"
          />
          Register As Volunteer
        </a>
      </div>
      <div className="lg:w-1/2 sm:w-[75%] w-full  mx-auto bg-white py-2 sm:pl-12 sm:px-0 px-3 shadow-xl shadow-slate-300">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Name">
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item label="Aadhar Number">
            <InputNumber className="w-full" placeholder="123456789876" />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group>
              <Radio.Button value="large">Male</Radio.Button>
              <Radio.Button value="default">Female</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Birth Date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Age">
            <InputNumber className="w-36" placeholder="18" />
          </Form.Item>
          <Form.Item label="Upload Image" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="District">
            <Input placeholder="Your District" />
          </Form.Item>
          <Form.Item label="Block">
            <Input placeholder="Your Block" />
          </Form.Item>
          <Form.Item label="Vidhan Sabha">
            <Input placeholder="Your Vidhan Sabha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="middle" className="bg-blue-500 w-28">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default RegisterVolunteer;
