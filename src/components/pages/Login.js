import React, { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { DatePicker, message, Col, Row, Form, Button, Input } from "antd";
import Text from "../atoms/Text.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
// import 'antd/dist/antd.css';
import loginImg from "../assets/login.png";

//https://3x.ant.design/components/form/
//https://tailwindcomponents.com/component/login-form
//https://tailwindcomponents.com/component/native-and-social-login-form

function Login() {
  const width = useWindowWidth();
  const [date, setDate] = useState(null);
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    debugger;
    console.log("event", e);
    e.preventDefault();
    return <a href="/#"></a>;
  }

  useEffect(() => {
    console.log("form", form);
  }, [form]);

  return (
    <>
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        <div className="bg-white transparent flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
          <div className="loginImage">
            <img
              src={loginImg}
              width="300"
              style={{ position: "relative" }}
              alt="login"
            />
          </div>
          {width > 640 && (
            <Form
              form={form}
              onSubmit={handleSubmit}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              layout="inline"
            >
              <Form.Item
                name="email"
                label="Email"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your email or username!",
                  },
                ]}
              >
                <Input
                  prefix={<FaRegUser size={20} />}
                  placeholder="Username"
                  type="email"
                  value={email}
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<RiLockPasswordLine size={20} />}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
              </Form.Item>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                  href="/#"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="flex items-center justify-between">
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                  href="/register"
                >
                  Register
                </a>
              </div>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
