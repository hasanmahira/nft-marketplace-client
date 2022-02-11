import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import {
  DatePicker, message, Col, Row, Form,
} from 'antd';

function Login() {
  const width = useWindowWidth();
  const [date, setDate] = useState(null);
  const [form] = Form.useForm();

  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`,
    );
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date:
        {' '}
        {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
}

export default Login;
