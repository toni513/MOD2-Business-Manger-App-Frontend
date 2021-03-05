import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, SignUp, SignIn, SignOut, ProjectList } from "./components";
function App() {
  console.log("testing")
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          <Route path="/signup" exact render={(props) => <SignUp {...props} />} />
          <Route path="/signin" exact render={(props) => <SignIn {...props} />} />
          <Route path="/signout" exact render={(props) => <SignOut {...props} />} />
          <Route path="/projectlist" exact render={(props) => <ProjectList {...props} />} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;