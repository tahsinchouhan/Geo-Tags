import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
const RegisterHouse = () => {
  const { TextArea } = Input;

  return (
    <section className="bg-gray-50 pt-28 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 mx-auto bg-white w-1/2 pt-5 pb-2 shadow-xl shadow-slate-300">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img
            className="w-12 h-12 mr-2"
            src="/assets/images/logo.png"
            alt="logo"
          />
          Register A House
        </a>
      </div>
      <div className="w-1/2 mx-auto bg-white py-2 pl-12 shadow-xl shadow-slate-300">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Head of House">
            <Input placeholder="HOD Name" />
          </Form.Item>
          <Form.Item label="House Number">
            <InputNumber className="w-36" placeholder="101" />
          </Form.Item>
          <Form.Item label="Number of Residents">
            <InputNumber min={1} className="w-36" placeholder="1 2 3" />
          </Form.Item>
          <Form.Item label="Pin Code">
            <InputNumber className="w-36" placeholder="Your Area Pin Code" />
          </Form.Item>

          <Form.Item label="Landmark">
            <Input placeholder="Landmark" />
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
          <Form.Item label="Address">
            <Input rows={2} defaultValue="" />
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

export default RegisterHouse;
