import React from "react"
import css from "./FormsControl.module.css"
import { Field } from 'redux-form'

export const Textarea = (props) => {
    return <div><BuildComponentForForm {...props} element={"textarea"} /></div>
}

export const Input = (props) => {
    return <div><BuildComponentForForm {...props} element={"input"} /></div>
}

let BuildComponentForForm = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    let error = meta.error
    return (
        <div className={!!hasError ? css.errorField : ""}>
            <div>
                <props.element {...input} {...props}/>
            </div>
            <div>
                { hasError && error  ? <span>{meta.error}</span> : ""}
            </div>
        </div>
    )
}

export const createNewForm = (name, component, placeholder="", validate=[], props, text="") => {
    return <div>
        <Field name={name} component={component} placeholder={placeholder} {...props}/>{text}
    </div>
}