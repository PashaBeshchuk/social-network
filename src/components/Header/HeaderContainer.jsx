import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthData, logoutUser } from "../../redux/authReduser"

class HeaderContainer extends React.Component {
    render() {
      return  <Header {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        userAuth:state.auth.userAuth,
        login:state.auth.login
    }
}
export default connect(mapStateToProps, { setAuthData, logoutUser })(HeaderContainer)