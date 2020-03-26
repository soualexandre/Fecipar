/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/landing.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/profile.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="3">
                <h4 className="text-primary font-weight-light mb-2">
                  LOGO
                </h4>
              </Col>
              <Col lg="3">
                <small className="text-uppercase text-muted font-weight-bold">
                  Fale conosco
                <br />
                (63) 3602-6649
                </small> 
              </Col>
              <Col lg="3">
                <small className="text-uppercase text-muted font-weight-bold">
                  Envie sua mensagem
                <br />
                atendimento@fecipar.com.br
                </small> 
              </Col>
        
              <Col className="text-lg-center btn-wrapper" lg="3">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/pages/FEPARFECIPAR/133484846662799"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Conheça nossa Página
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://www.instagram.com/feparfecipar/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Acompanhe nosso Feed
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="5">
                <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Faculdade de Educação, Ciências e Letras de Paraíso
                
                <br /><br />
                  Rua L-20, nº 711, Setor Interlagos<br />
                  Paraíso do Tocantins - TO<br />
                  </small>
                </div>                
              </Col>

              <Col md="4">
                <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Atendimento
                <br /><br />
                  Segunda à Sexta-feira das 13h às 22h<br />
                  Sábado das 8h às 12h
                  </small>
                </div>                
              </Col>

              <Col md="3">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>                    
                  <div className="copyright">                  
                  <small className="text-uppercase text-muted font-weight-bold">
                  © {new Date().getFullYear()}{" "}
                  FEPAR - FECIPAR
                  <br />
                  <a href="http://jasoninfo.com.br/"
                    target="_blank">Codificado por Jasoninfo</a>
                </small>
                </div>  
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
