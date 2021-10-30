import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login }) => {
    const [formData, setFormDate] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) => setFormDate({ ...formData, [e.target.name]: e.target.value });
    const onSubmits = async (e) => {
        e.preventDefault();
        console.log(email, password);
        login(email, password);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Sign in into Your Account
            </p>
            <form className="form" onSubmit={(e) => onSubmits(e)}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an Account? <Link to="/register">Register</Link>
            </p>
        </Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
