
import { Card } from '@paljs/ui/Card';

import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

const AtributosPage = () => {

  return (
    <Layout title="List">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small">
            <header>Fruit List</header>
         
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small">
            <header>Users List</header>
      
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default AtributosPage;
