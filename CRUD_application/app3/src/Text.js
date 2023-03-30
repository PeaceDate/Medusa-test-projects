import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;

const MyButton = ({children}) => (
    <Title level={2}>{children}</Title>
);

export default MyButton;