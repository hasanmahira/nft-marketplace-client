import React, { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useLazyQuery,
  variables,
} from "@apollo/client";
import { DatePicker, message, Col, Row, Form, Input } from "antd";
import Button from "../atoms/Button.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
// import 'antd/dist/antd.css';
import loginImg from "../assets/login.png";
// import UseLogin from "../hooks/UseLogin"

//https://3x.ant.design/components/form/
//https://tailwindcomponents.com/component/login-form
//https://tailwindcomponents.com/component/native-and-social-login-form

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
  cache: new InMemoryCache(),
});

const login = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Login() {
  const width = useWindowWidth();
  const [form] = Form.useForm();
  const [token, setToken] = useState("");

  async function loginUser(email, password) {
    await client
      .query({
        query: login,
        variables: {
          email: email,
          password: password,
        },
      })
      .then((result) => setToken(result.data.login));
  }

  function handleSubmit() {
    const { email, password } = form.getFieldsValue("email");
    if (email && email.length > 3 && password && password.length > 3) {
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
          {width > 640 && (
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
              <a href="/#" className="self-end mt-4 text-gray-600 font-bold">
                Forgot password?
              </a>

              <Form.Item></Form.Item>

              <div className="flex items-center justify-between">
                <Button
                  color="blue-600"
                  href="#"
                  // htmlType="submit"
                  // disabled={!validateForm()}
                  onPress={() => handleSubmit()}
                  label="Login"
                />
              </div>
              <a
                href="/register"
                className="self-end mt-4 text-gray-600 font-bold"
              >
                Sign Up
              </a>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
