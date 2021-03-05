import React from "react";
import { Button } from "react-bootstrap";
import office from "../images/office1.png";
import SignIn from "./SignIn";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHome: true,
      isSignIn: false,
    };

    this.enableSignIn = this.enableSignIn.bind(this);
  }

  enableSignIn() {
    this.props.history.push("/signin");
    this.setState({
      isHome: false,
      isSignIn: true,
    });
  }

  signinPage() {
    return <SignIn />;
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div
          class="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${office})`,
            height: "100vh",
          }}
        >
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "73vh" }}
          >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1>Let's Get Started!</h1>
                <Button
                  className="btn btn-outline-warning btn-lg"
                  onClick={this.enableSignIn}
                >
                  SIGN IN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
