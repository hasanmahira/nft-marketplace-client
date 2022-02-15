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
  useMutation,
} from "@apollo/client";
import { DatePicker, message, Col, Row, Form, Input } from "antd";
import Button from "../atoms/Button.js";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginImg from "../assets/login.png";
// import register from "../hooks/UseRegister";

const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphql",
  cache: new InMemoryCache(),
});

const register = gql`
  mutation register(
    $email: String!
    $password: String!
    $name: String!
    $surname: String!
    $userName: String!
    $bdate: String!
    $createdAt: String!
    $updatedAt: String!
  ) {
    register(
      email: $email
      passwordDigest: $password
      name: $name
      surname: $surname
      userName: $userName
      bdate: $bdate
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      email
    }
  }
`;

function Register() {
  const width = useWindowWidth();
  const [form] = Form.useForm();
  const [token, setToken] = useState("");
  // const [addUser, { data, loading, error }] = useMutation(register);

  async function registerUser(
    email,
    password,
    name,
    surname,
    userName,
    bdate,
    createdAt,
    updatedAt
  ) {
    // addUser({
    //   variables: {
    //     email: email,
    //     password: password,
    //     name: name,
    //     surname: surname,
    //     userName: userName,
    //     bdate: bdate,
    //     createdAt: createdAt,
    //     updatedAt: updatedAt,
    //   },
    // }).then((result) => setToken(result));

    await client.mutate({
      mutation: register,
      variables: {
        email: email,
        password: password,
        name: name,
        surname: surname,
        userName: userName,
        bdate: bdate,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    })
    .then((result) => setToken(result.data.register));
  }

  function handleSubmit() {
    const {
      email,
      password,
      name,
      surname,
      userName,
      bdate,
      createdAt,
      updatedAt,
    } = form.getFieldsValue("email");
    if (
      email &&
      email.length > 3 &&
      password &&
      password.length > 3 &&
      name &&
      name.length > 3 &&
      surname &&
      surname.length > 3 &&
      userName &&
      userName.length > 3 &&
      bdate &&
      bdate.length > 3
    ) {
      registerUser(
        email,
        password,
        name,
        surname,
        userName,
        bdate,
        createdAt,
        updatedAt
      );
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
              <Row>
                <Col span={12}>
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
                      autoFocus
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
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
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="name"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              >
                <Input
                  prefix={<RiLockPasswordLine size={20} />}
                  placeholder="Name"
                  type="name"
                ></Input>
              </Form.Item>

              <Form.Item
                name="surname"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your surname!",
                  },
                ]}
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              >
                <Input
                  prefix={<RiLockPasswordLine size={20} />}
                  placeholder="Surname"
                  type="surname"
                ></Input>
              </Form.Item>

              <Form.Item
                name="userName"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your userName!",
                  },
                ]}
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              >
                <Input
                  prefix={<RiLockPasswordLine size={20} />}
                  placeholder="UserName"
                  type="userName"
                ></Input>
              </Form.Item>

              <Form.Item
                name="bdate"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input your bdate!",
                  },
                ]}
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              >
                <Input
                  prefix={<RiLockPasswordLine size={20} />}
                  placeholder="Birthdate"
                  type="date"
                ></Input>
              </Form.Item>

              <a href="/#" className="self-end mt-4 text-gray-600 font-bold">
                Forgot password?
              </a>

              <div className="flex items-center justify-between">
                <Button
                  color="blue-600"
                  href="#"
                  onPress={() => handleSubmit()}
                  label="Register"
                />
              </div>
              <a
                href="/login"
                className="self-end mt-4 text-gray-600 font-bold"
              >
                Login
              </a>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
