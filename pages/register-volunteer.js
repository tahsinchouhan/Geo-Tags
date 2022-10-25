import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, Upload } from "antd";
import React, { useContext, useState } from "react";
import { LocationContext } from "../AppContext";
const RegisterVolunteer = () => {
  const [loading, setLoading] = useState(false);
  const { location } = useContext(LocationContext);
  console.log("location", location);
  const CurrentLocation = location?.results;
  // console.log("CurrentLocation", CurrentLocation);

  // const CurrentLocation = location?.results.find((item) => item !== null);
  // console.log("CurrentLocation", CurrentLocation);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    setLoading(true);
    try {
      const res = await fetch("/api/register/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          aadhar: values.aadhar,
          mobilenumber: values.mobilenumber,
          gender: values.gender,
          birthdate: values.dob._d,
          age: values.age,
          state: values.state,
          district: values.district,
          block: values.block,
          vidhansabha: values.vidhansabha,
          address: values.address,
        }),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return res.status(500).json({ error: error.message });
    }
  };

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
          form={form}
          onFinish={onFinish}
        >
          <Form.Item rules={[{ required: true }]} name="name" label="Name">
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="email" label="Email">
            <Input placeholder="Your Email" type="email" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="aadhar"
            label="Aadhar Number"
          >
            <Input
              type="number"
              className="w-full"
              placeholder="123456789876"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="mobilenumber"
            label="Mobile Number"
          >
            <Input
              type="number"
              className="w-full"
              placeholder="+91 1234567890"
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="gender" label="Gender">
            <Radio.Group>
              <Radio.Button value="male">Male</Radio.Button>
              <Radio.Button value="female">Female</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="dob" label="Birth Date">
            <DatePicker />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="age" label="Age">
            <Input type="number" className="w-36" placeholder="18" />
          </Form.Item>
          <Form.Item name="image" label="Upload Image">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="state" label="State">
            <Input
              defaultValue={
                CurrentLocation?.state !== "" ? CurrentLocation?.state : ""
              }
              placeholder="Your State"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="district"
            label="District"
          >
            <Input
              defaultValue={
                CurrentLocation?.district !== ""
                  ? CurrentLocation?.district
                  : ""
              }
              placeholder="Your District"
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="block" label="Block">
            <Input placeholder="Your Block" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            defaultValue={
              CurrentLocation?.locality !== "" ? CurrentLocation?.locality : ""
            }
            name="vidhansabha"
            label="Vidhan Sabha"
          >
            <Input placeholder="Your Vidhan Sabha" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="address"
            label="Address"
          >
            <Input
              placeholder="Your Address"
              defaultValue={
                CurrentLocation?.formatted_address !== ""
                  ? CurrentLocation?.formatted_address
                  : ""
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="middle"
              className="bg-blue-500 w-28"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default RegisterVolunteer;
