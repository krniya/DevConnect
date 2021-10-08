import React, { Fragment } from "react";
import "./App.css";
import { Navbar } from "./components/lauout/Navbar";
import { Landing } from "./components/lauout/Landing";

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Landing />
        </Fragment>
    );
};

export default App;
