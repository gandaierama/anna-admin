
import { Card } from '@paljs/ui/Card';

import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import MUIDataTable from "mui-datatables";




const columns = ["ID", "Detalhes", "Data", "Ação"];

const ListPage = () => {
  const userList = [
    [ '1', 'Carla Espinosa', 'Nurse', '' ],
    [ '1','Bob Kelso', 'Doctor of Medicine', '' ],
    [ '1','Janitor', 'Janitor', '' ],
    [ '1','Perry Cox', 'Doctor of Medicine', '' ],
    [ '1','Ben Sullivan', 'Carpenter and photographer', '' ],
  ];

  const options = {

};
 

  return (
    <Layout title="PromoCodes">
      <Row>

        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <header>PromoCodes</header>

            <MUIDataTable 
  title={"Employee List"} 
  data={userList} 
  columns={columns} 
  options={options} 
/>

          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default ListPage;
