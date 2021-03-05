import React from "react";
import { Button } from "react-bootstrap";
import money from "../images/money5.jpg";
import ProjectList from "./ProjectList";

class SignOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignOut: true,
      isProjectList: false,
    };

    this.grabList = this.grabList.bind(this);
  }

  grabList() {
    this.props.history.push("/projectlist");
    this.setState({
      isProjectList: true,
      isSignOut: false,
    });
  }

  listPage() {
    return <ProjectList />;
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div
          class="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${money})`,
            height: "100vh",
          }}
        >
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "73vh" }}
          >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1>Begin A Task</h1>
                <br />
                <Button
                  className="btn btn-outline-light btn-lg"
                  onClick={this.grabList}
                >
                  Create A Project List
                </Button>
                <Button
                  className="btn btn-outline-light btn-lg"
                  onClick={this.grabBudget}
                >
                  Create A Project Budget
                </Button>
                <Button
                  className="btn btn-outline-light btn-lg"
                  onClick={this.grabLog}
                >
                  Create A Mileage Log
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignOut;
