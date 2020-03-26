/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="10">
                <h5 className="display-4">
                  Ainda não possui formação de qualidade?
                </h5>
                <p className="lead">
                Você está pensando no seu futuro?
                A graduação pode ser a melhor alternativa.<br />
                O curso superior lhe proporciona o aprimoramento de suas habilidades, <br />conhecimentos
                e talentos para o mercado de trabalho.<br />
                Não perca tempo, conheça os cursos agora mesmo.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="/"
                  >
                    Cursos de Graduação
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
