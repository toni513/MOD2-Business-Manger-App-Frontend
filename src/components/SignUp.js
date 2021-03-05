import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import logo from "../images/EZ.png";
import SignIn from "./SignIn";


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClientPage: true,
      isSignIn: false,
    };

    this.enableSignIn = this.enableSignIn.bind(this);
  
  }

  enableSignIn() {
    this.props.history.push("/signin")
    this.setState({
      isSignIn: true,
      isClientPage: false,
    });
  }
  
  signinPage() {
    return <SignIn />;
  }

  render() {
    console.log(this.props)
    var clientComp = (
      <div>
     {/* <div
    class="p-5 text-center bg-image"
    style={{
      backgroundColor:"rgba(236, 38, 87, 0.8)" , 
      height: "100vh",
      zIndex: "-2"
    }}></div>*/}
        <br />
        <div class="bg-image" style={{zIndex: "-1"}}>
        <Container>
          <Row>
            <Col md={{ span: 5, offset: 3 }}>
              <Jumbotron>
                <img src={logo} alt="EM" width={100} />
                <h1>Welcome!</h1>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="First Name"></Form.Control>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last Name"></Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type="telephone"
                        placeholder="Enter Phone Number"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Ohio</option>
                        <option>Kentucky</option>
                        <option>Indiana</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCityZip">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <Container>
                        <Button
                          variant="warning"
                          type="submit"
                          size="lg"
                          onClick={this.enableSignIn}>
                          REGISTER
                        </Button>
                  </Container>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );

    return (
      <div>
        {this.state.isClientPage ? clientComp : null}
      </div>
    );
  }
}

export default SignUp;