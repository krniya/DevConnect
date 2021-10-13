import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/lauout/Navbar";
import { Landing } from "./components/lauout/Landing";
import Register from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import Alert from "./components/lauout/Alert";
// * Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <section className="container">
                        <Alert />
                        <Switch>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
