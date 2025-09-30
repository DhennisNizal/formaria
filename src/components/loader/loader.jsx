import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const Loader = () => (
  <Flex
    align="center"
    justify="center"
    style={{
      height: "100vh",
      width: "100vw",
    }}
  >
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </Flex>
);

export default Loader;
