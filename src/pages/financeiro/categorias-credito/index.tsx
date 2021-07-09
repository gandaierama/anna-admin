import { Card } from '@paljs/ui/Card';
import {Modal, Button} from 'react-bootstrap'
import { AiOutlineEdit, AiOutlineDelete  } from "react-icons/ai";
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React, {useState} from 'react';
import { InputGroup } from '@paljs/ui/Input';
import Layout from 'Layouts';
import MUIDataTable from "mui-datatables";
import { ButtonLink } from '@paljs/ui/Button';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  star?: any;
}
const style = { marginRight: '15px', padding: '5px' };
const style2 = { marginRight: '15px', padding: '5px', width:'100%' };
const styleCol= {  padding: '15px' };
const modalStyle= {  color: '#000000' };

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;


const url_back=process.env.URL_BACK;

const columns = ["ID", "Nome", "Email", "Ação"];

const CategoriaCredito: NextPage<Props> = ({ star })=> {

  const router = useRouter();

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = {

};

  return (
    <Layout title="PromoCodes">
      <Row>

        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <Row style={styleCol}>
              <Col breakPoint={{ xs: 8 }}>
                <header>Categorias de crédito</header>
              </Col>
              <Col breakPoint={{ xs: 4 }}>
                <ButtonLink style={style2}  onClick={handleShow}  >
                Criar
                </ButtonLink>
              </Col>
            </Row>
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={modalStyle}>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input fullWidth size="Medium">
                <input type="text" placeholder="Size Medium" />
              </Input>

              <Input fullWidth size="Medium">
                <input type="text" placeholder="Size Medium" />
              </Input>

              <Input fullWidth size="Medium">
                <input type="text" placeholder="Size Medium" />
              </Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
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
