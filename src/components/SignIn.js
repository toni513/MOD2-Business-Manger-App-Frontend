import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import logo from "../images/EZ.png";
import SignOut from "./SignOut";


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClientPage: true,
      isSignOut: false,
    };

    this.enableSignOut = this.enableSignOut.bind(this);
  
  }

  enableSignOut() {
    this.props.history.push("/signout")
    this.setState({
      isSignOut: true,
      isSignIn: false,
    });
  }
  
  signoutPage() {
    return <SignOut />;
  }

  render() {
    var regClient = (
      <>
        <br />
        <Container>
          <Row>
            <Col md={{ span: 5, offset: 3 }}>
              <Jumbotron>
                <img src={logo} alt="EM" width={100} />
                <h1>Welcome Back!</h1>
                <Form>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Enter Email"></Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                  </Form.Row>  
                  <Container>
                    <Row>
                      <Col>
                        <Button
                          variant="warning"
                          type="submit"
                          size="lg"
                          onClick={this.enableSignOut}>
                          SUBMIT
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </>
    );
    return (
      <div>
        {this.state.isClientPage ? regClient : null}
      </div>
    );
  }
}

export default SignIn;