import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


export default function Contac() {
  const onFinish = async (values) => {
    try {
      const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdqmTV_KURUpUDL5qcoZfTb_FIzcI2LdMP3NiNRj-qXkljDoQ/formResponse"; // Google Form URL
      const formData = new FormData();

      // Append form values to formData
      formData.append("entry.550024018", values.name);
      formData.append("entry.1516466819", values.phone);
      formData.append("entry.431800140", values.email);
      formData.append("entry.2013422363", values.message);

      // Submit formData to Google Form URL
      await axios.post(formURL, formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
      
      // Reset form fields after successful submission
      form.resetFields();

      // Show success message to user
      alert('Form submitted successfully!');
      
    } 
    
    catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submitted successfully!');
    }
  };


  const [form] = Form.useForm();
  return (
    <Form {...layout} title='CONTACT' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name="name"
        label="Name"
        values="name"
        id='name'
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        id="email"
        values="email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        id="phone"
        values="phone"
        label="Phone"
        rules={[
          {
            // required: true,
            message: 'Please input your phone number!',
          },
          {
            pattern: /^\d{10}$/,
            message: 'Please input a valid 10-digit phone number!',
          },
        ]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        id="message"
        values="message"
        name="message" label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
