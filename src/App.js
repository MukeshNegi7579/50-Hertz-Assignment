import './App.css';
import { connect } from "react-redux"
import {
  login,
} from "./redux/Auth/actions"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App(props) {
  const { user, login } = props;
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          {
            user && (
              <Route path="/">
                <Dashboard />
              </Route>
            )
          }
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login onSubmit={login} />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)