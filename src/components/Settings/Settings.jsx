import React, { Component } from "react"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class Settings extends React.Component{
    render(){
        return <div>
            Settings
        </div>
    }
}

export default withAuthRedirect(Settings);