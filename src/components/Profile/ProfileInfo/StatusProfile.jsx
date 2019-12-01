import React, { Component } from "react"

class StatusProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: true,
            text: this.props.status
        }
    }
    changeEditMode() {
        this.setState({ editMode: !this.state.editMode })
        if (!this.state.editMode) {
            this.props.editStatus(this.state.text)
        }
    }
    editTextStatus(e) {
        this.setState({ text: e.target.value })
    }
    componentDidUpdate(prefProps, prevState) {
       if(prefProps.status !== this.props.status){
           this.setState({text:this.props.status})
       }
    }
    render() {
        return <div>
            {
                this.state.editMode
                    ? <span onClick={this.changeEditMode.bind(this)}>{!this.props.status ? "Введите статус" : this.props.status}</span>
                    : <input onChange={this.editTextStatus.bind(this)} onBlur={this.changeEditMode.bind(this)} autoFocus={true} value={this.state.text} />
            }
        </div>
    }
}

export default StatusProfile