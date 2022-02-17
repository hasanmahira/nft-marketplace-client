import React, { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import { DatePicker, message, Col, Row, Form, Input } from "antd";
import Button from "../atoms/Button.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginImg from "../assets/login.png";
import { Client, LoginQuery } from "../utils";

function ForgetPassword() {
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
                placeholder="Password"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </Form.Item>
            <div className="flex items-center justify-between">
              <a href="/#" className="self-end mt-4 text-gray-600 font-bold">
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

export default ForgetPassword;
