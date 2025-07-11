import React, { Component, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import SetProperty from './SetProperty.jsx'

function SetPropertyTextbox(props) {

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const uid = props.set.uid
        const name = props.set.name
        const description = props.set.description
        const url = props.set.url
        const body = {uid, name, description, url}
        body[props.setProp] = inputRef.current.value

        props.set[props.setProp] = inputRef.current.value

        const response = axios.post('http://localhost:8000/brenna/sets/modify', body)
        props.setComponent(<SetProperty name={props.name} content={inputRef.current.value} edit={props.edit} setComponent={props.setComponent}></SetProperty>)
        console.log(props.set)
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="col-xs-6 col-md-6 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {props.name}
                    </div>
                    <input id={props.name + "_box"} type="text" ref={inputRef} defaultValue={props.content} autoComplete="off" />
                </div>
                <div className="col-xs-6 col-md-6">
                    <button type="submit" style={{border: '1px solid black', float: "left"}}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default SetPropertyTextbox;