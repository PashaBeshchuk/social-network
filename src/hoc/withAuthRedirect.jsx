import React, { Component } from "react"
import { connect } from "react-redux"
import {Redirect} from "react-router-dom"

let mapStateToProps = (state) => {
    return {
        userAuth:state.auth.userAuth
    }
}
export const withAuthRedirect = (Component) => {
    class ComponentContainer extends React.Component {
        render() {
            if(!this.props.userAuth){
               return <Redirect to="/login" />
               
            }
            return <Component {...this.props} />
        }
    }
    let ContainerForComponentContainer = connect(mapStateToProps)(ComponentContainer)
    return ContainerForComponentContainer
}