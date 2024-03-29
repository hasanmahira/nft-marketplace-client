import React, { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import { DatePicker, message, Col, Row, Form, Input } from "antd";
import Button from "../atoms/Button.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginImg from "../assets/login.png";
import { Client, LoginQuery } from "../utils";

function Login() {
  const width = useWindowWidth();
  const [form] = Form.useForm();
  const [token, setToken] = useState("");

  async function loginUser(email, password) {
    await Client.query({
      query: LoginQuery,
      variables: {
        email: email,
        password: password,
      },
    }).then((result) => setToken(result.data.login));
  }

  function handleSubmit() {
    const { email, password } = form.getFieldsValue("email");
    if (email && email.length > 3 && password && password.length > 3) {
      localStorage.setItem("email", email);
      loginUser(email, password);
    }
  }

  useEffect(() => {
    console.log("token", token);
  }, [token]);

  return (
    <>
      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="loginImage">
            <img
              src={loginImg}
              width="300"
              style={{ position: "relative" }}
              alt="login"
            />
          </div>
          <Form
            form={form}
            onSubmit={() => handleSubmit()}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="inline"
          >
            <Form.Item
              name="email"
              size="large"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            >
              <Input
                prefix={<FaRegUser size={20} position="center" />}
                placeholder="Email"
                type="email"
                // value={email}
                autoFocus
                // onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </Form.Item>

            <Form.Item
              name="password"
              size="large"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            >
              <Input
                prefix={<RiLockPasswordLine size={20} />}
                placeholder="New Password"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </Form.Item>
            <div className="flex items-center justify-between">
              <a
                href="/forget"
                className="self-end mt-4 text-gray-600 font-bold"
              >
                Forgot password?
              </a>
            </div>

            <Form.Item></Form.Item>

            <div className="flex items-center justify-between">
              <Button
                color="blue-600"
                href="#"
                onPress={() => handleSubmit()}
                label="Login"
              />
            </div>
            <div className="flex items-center justify-between">
              <a
                href="/register"
                className="self-end mt-4 text-gray-600 font-bold"
              >
                Register
              </a>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
