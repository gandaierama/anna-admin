import { List, ListItem } from '@paljs/ui/List';
import { Card } from '@paljs/ui/Card';

import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import { NextPage } from 'next'


interface Props {
  star?: any;
}

const url_back=process.env.URL_BACK;
const CategoriasDespesas: NextPage<Props> = ({ star })=> {


  console.log(star)
  return (
    <Layout title="CategoriasDespesas">
      <Row>

        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <header>CategoriasDespesas </header>
            <List>
              {star.map((user, index) => (
                <ListItem key={index}>
                  <div>{user.nome}<br/>{user.email}</div>
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
CategoriasDespesas.getInitialProps = async () => {


    const res = await fetch(
      `${url_back}/usuarios`, {method: 'GET'}
    );
    const json = await res.json();
    console.log(json)
  return { star: json }
  
}
export default CategoriasDespesas;
