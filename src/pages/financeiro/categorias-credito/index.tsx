
import { Card } from '@paljs/ui/Card';
import { AiOutlineEdit, AiOutlineDelete  } from "react-icons/ai";
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import MUIDataTable from "mui-datatables";
import { ButtonLink } from '@paljs/ui/Button';
import { NextPage } from 'next'
import { useRouter } from 'next/router';

interface Props {
  star?: any;
}
const style = { marginRight: '15px', padding: '5px' };

const url_back=process.env.URL_BACK;

const columns = ["ID", "Nome", "Email", "Ação"];

const CategoriaCredito: NextPage<Props> = ({ star })=> {
  //let userList2=[];
  const router = useRouter();

  // console.log(star);
  // const userList = [
  //   [ '1', 'Carla Espinosa', 'Nurse', '' ],
  //   [ '1','Bob Kelso', 'Doctor of Medicine', '' ],
  //   [ '1','Janitor', 'Janitor', '' ],
  //   [ '1','Perry Cox', 'Doctor of Medicine', '' ],
  //   [ '1','Ben Sullivan', 'Carpenter and photographer', '' ],
  // ];

  const options = {

};

  return (
    <Layout title="PromoCodes">
      <Row>

        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <header>Categorias de crédito</header>
            <ButtonLink   onClick={() => router.push('/')}  >
            Criar
            </ButtonLink>
            <MUIDataTable 
  title={"Todas as categorias de crédito"} 
  data={star.map(item => {
        return [
            item.id,
            item.nome,
            item.email,
            <>
            <ButtonLink style={style}  onClick={() => router.push('/')}  >
                    <AiOutlineEdit/>
            </ButtonLink>
            <ButtonLink style={style}  onClick={() => router.push('/')}  >
                    <AiOutlineDelete/>
            </ButtonLink>
            </>
        ]
    })}
    columns={columns}
  options={options} 
/>

          </Card>
        </Col>
      </Row>
    </Layout>
  );
};


CategoriaCredito.getInitialProps = async () => {


    const res = await fetch(
      `${url_back}/usuarios`, {method: 'GET'}
    );
    const json = await res.json();
    console.log(json)
  return { star: json }
  
}
export default CategoriaCredito;
