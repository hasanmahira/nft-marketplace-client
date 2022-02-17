import React, { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { DatePicker, message, Col, Row, Form, Input, Upload } from "antd";
import Button from "../atoms/Button.js";
import { FaFileUpload } from "react-icons/fa";
import { Buffer } from "buffer";
import { NFTStorage, File, Blob } from "nft.storage";
import { Client, CreateNftMut } from "../utils";

const { Dragger } = Upload;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5YTg4NDgxMURmNUVGMTA0OGY2NjAxNmNhOTA0Rjk5NDM3RTc3NTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NDk5NjY4ODc5OCwibmFtZSI6Im9yaWNhIn0.YcnH87tnfHhfMa5sfBpCQXHuLMS6m8y5ZDfiwcrssZ0";

const nftStorageClient = new NFTStorage({ token });

function CreateNftFile() {
  const width = useWindowWidth();
  const [form] = Form.useForm();
  const [token, setToken] = useState("");
  const [fileList, setFileList] = useState([]);
  const [base64File, setBase64File] = useState("");

  async function createNft(
    creator,
    price,
    name,
    description,
    category,
    onSale,
    isAuction,
    cid,
    createdAt,
    updatedAt
  ) {
    await Client
      .mutate({
        mutation: CreateNftMut,
        variables: {
          creator: creator,
          name: name,
          price: price,
          description: description,
          category: category,
          onSale: onSale,
          isAuction: isAuction,
          cid: cid,
          createdAt: createdAt,
          updatedAt: updatedAt,
        },
      })
      .then((result) => setToken(result.data.createNft));
  }

  function uploadData(event) {
    const dataBuffer = event.target.result;
    const buff = Buffer.from(dataBuffer);
    setBase64File(buff);
  }

  function getBlob(event) {
    if (fileList.length === 1) {
      let fileExt = fileList[0].name.split(".");
      fileExt = fileExt[fileExt.length - 1];
    }
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileList[0]);
    reader.onload = uploadData;
  }

  useEffect(() => {
    fileList && fileList.length === 1 ? getBlob() : "";
  }, [fileList]);

  useEffect(() => {
    base64File ? base64File : "";
  }, [base64File]);

  async function handleSubmit(event) {
    let {
      creator,
      price,
      name,
      description,
      category,
      onSale,
      isAuction,
      cid,
      createdAt,
      updatedAt,
    } = form.getFieldsValue("name");
    const nftCid = await nftStorageClient.storeBlob(new Blob([base64File]));
    cid = nftCid;
    creator = localStorage.getItem('email');
    createdAt = Date.now().toString();
    updatedAt = Date.now().toString();
    // if (
    //   creator &&
    //   creator.length > 3 &&
    //   price &&
    //   name &&
    //   description &&
    //   description.length > 3 &&
    //   category &&
    //   cid &&
    //   cid.length > 3 &&
    //   createdAt &&
    //   createdAt.length > 3 &&
    //   updatedAt &&
    //   updatedAt.length > 3
    // ) {
    createNft(
      creator,
      parseFloat(price),
      name,
      description,
      parseInt(category),
      Boolean(onSale),
      Boolean(isAuction),
      cid,
      createdAt,
      updatedAt
    );
    // }
  }

  useEffect(() => {}, [token]);

  return (
    <>
      <div className="grid gap-y-3 py-3 pb-3 container mx-auto">
        <div className="bg-white transparent flex flex-col gap-y-2 text-center items-center rounded-lg px-2 py-5">
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
            <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center background-image: url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);">
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
              <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                  <h2 className="mt-5 text-3xl font-bold text-gray-900">
                    Create single item
                  </h2>
                  <p className="mt-2 text-sm text-gray-400"></p>
                </div>

                <Form.Item
                  name="price"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Please input your price!",
                    },
                  ]}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                >
                  <Input placeholder="Price" type="float"></Input>
                </Form.Item>

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
                  <Input placeholder="Name" type="name"></Input>
                </Form.Item>

                <Form.Item
                  name="description"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                >
                  <Input placeholder="Description" type="description"></Input>
                </Form.Item>

                <Form.Item
                  name="category"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category!",
                    },
                  ]}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                >
                  <Input placeholder="Category" type="int"></Input>
                </Form.Item>

                <Form.Item
                  name="onSale"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Please input your onSale!",
                    },
                  ]}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                >
                  <Input placeholder="OnSale" type="boolean"></Input>
                </Form.Item>

                <Form.Item
                  name="isAuction"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Please input your isAuction!",
                    },
                  ]}
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                >
                  <Input placeholder="isAuction" type="boolean"></Input>
                </Form.Item>

                <div  className="my-5 w-full flex justify-center bg-green-500 text-gray-100 p-4  rounded-full tracking-wide
                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-sky-600 shadow-lg cursor-pointer transition ease-in duration-300">
                <Dragger
                  name="File"
                  multiple={false}
                  accept=".png, .jpeg, .jpg, .gif"
                  action=""
                  beforeUpload={(file) => {
                    setFileList([file]);
                    return false;
                  }}
                  onRemove={(file) => {
                    setFileList(() => {
                      const index = fileList.indexOf(file);
                      const newFileList = fileList.slice();
                      newFileList.splice(index, 1);
                      return false;
                    });
                  }}
                >
                  <FaFileUpload size={50} position="center" />
                </Dragger>
                </div>

                <div>
                  <button
                    className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    // color="blue-600"
                    label="Create"
                    // onPress={() => handleSubmit()}
                    onClick={() => handleSubmit()}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateNftFile;
