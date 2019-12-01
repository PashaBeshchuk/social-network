import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { authLoginUser } from "../../redux/authReduser";
import { Redirect } from "react-router-dom";
import { createNewForm, Input } from "../Common/FormsControl/FormsControl"


class Login extends React.Component {
    constructor(props){
        super(props)
    }
    onSubmit(formData) {
        this.props.authLoginUser(formData.email, formData.password, formData.remeberMe)
    }
    render() {
        if(this.props.userAuth){
           return  <Redirect to={"/profile"} />
        }
        return <div>
            <h1>Login</h1>
            <ReduxLoginForum onSubmit={this.onSubmit.bind(this)} />
        </div>
    }
}

let LoginForm = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
        {createNewForm("email", Input, "Email")}
        {createNewForm("password", Input, "Password")}
        {createNewForm("rememberMe", Input, null, null, {type:"checkbox"}, "remember me")}
        { !!props.error && <div>{props.error}</div>}
        <div><button>Login</button></div>
    </form>
}

let ReduxLoginForum = reduxForm({ form: "authLogin" })(LoginForm)
let mapStateToProps = (state) =>({
    userAuth:state.auth.userAuth
})

export default connect(mapStateToProps,{authLoginUser})(Login)