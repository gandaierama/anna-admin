import { List, ListItem } from '@paljs/ui/List';
import { Card } from '@paljs/ui/Card';
import User from '@paljs/ui/User';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

const ListPage = () => {
  const userList = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  return (
    <Layout title="PromoCodes">
      <Row>

        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <header>PromoCodes</header>
            <List>
              {userList.map((user, index) => (
                <ListItem key={index}>
                  <User title={user.title} name={user.name} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default ListPage;
