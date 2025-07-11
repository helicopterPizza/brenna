import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SetPropertyTextbox from './SetPropertyTextbox.jsx'

/*
    Non-editable set property component
 */

function SetProperty(props) {
    if (props.edit == "True") {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {props.name}
                    </div>
                    <div>
                        {props.content}
                    </div>
                </div>
                <div className="col-xs-2 col-md-2">
                    <button onClick={() => {props.setComponent(<SetPropertyTextbox set={props.set} setProp={props.setProp} name={props.name} content={props.content} edit={props.edit} setComponent={props.setComponent}></SetPropertyTextbox>)}} style={{border: '1px solid black', float: "left"}}>Edit</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {props.name}
                    </div>
                    <div>
                        {props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default SetProperty;