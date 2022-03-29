import { Col, Row } from 'antd';
import React from 'react';

import Career from '../Career';
import InformationPersonal from '../InformationPersonal';

const Homepage: React.FC = () => (
  <div className="homePage">
    <Row gutter={8}>
      <Col span={8}>
        <InformationPersonal />
      </Col>
      <Col span={16}>
        <Career />
      </Col>
    </Row>
  </div>
);
export default Homepage;
