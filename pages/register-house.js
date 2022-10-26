import { Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { LocationContext } from "../AppContext";
const RegisterHouse = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { location } = useContext(LocationContext);
  console.log("location", location);

  const CurrentLocation = location || {};
  console.log(CurrentLocation);

  const {
    formatted_address,
    district,
    locality,
    pincode,
    houseNumber,
    lat,
    lng,
  } = CurrentLocation;
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    setLoading(true);
    try {
      const res = await fetch("/api/register/house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hodname: values.hodname,
          housenumber: values.housenumber,
          numberofresidents: values.numberofresidents,
          pincode: values.pincode,
          landmark: values.landmark,
          district: values.district,
          block: values.block,
          vidhan: values.vidhan,
          address: values.address,
          latitude: lat,
          longitude: lng,
        }),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 pt-28 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 mx-auto bg-white lg:w-1/2 sm:w-[90%] w-full pt-5 pb-2 shadow-xl shadow-slate-300">
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
      <div className="lg:w-1/2 sm:w-[90%] w-full mx-auto bg-white py-2 sm:pl-12 sm:px-0 px-3 shadow-xl shadow-slate-300">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            rules={[{ required: true }]}
            name="hodname"
            label="Head of House"
          >
            <Input placeholder="HOD Name" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="numberofresidents"
            label="Number of Residents"
          >
            <Input type="number" min={1} className="w-36" placeholder="1 2 3" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="housenumber"
            label="House Number"
          >
            <Input
              type="number"
              defaultValue={houseNumber ? houseNumber : ""}
              className="w-36"
              placeholder="101"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true }]}
            name="pincode"
            label="Pin Code"
          >
            <Input
              type="number"
              className="w-36"
              defaultValue={pincode ? pincode : ""}
              placeholder="Your Area Pin Code"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="landmark"
            label="Landmark"
          >
            <Input placeholder="Landmark" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="district"
            label="District"
          >
            <Input
              placeholder="Your District"
              defaultValue={district ? district : ""}
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="block" label="Block">
            <Input placeholder="Your Block" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="vidhan"
            label="Vidhan Sabha"
          >
            <Input
              defaultValue={locality ? locality : ""}
              placeholder="Your Vidhan Sabha"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="address"
            label="Address"
          >
            <Input
              rows={2}
              defaultValue={formatted_address ? formatted_address : ""}
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
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

export default RegisterHouse;
