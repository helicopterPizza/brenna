import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SetPropertyTextbox from './SetPropertyTextbox.jsx'

/*
    Non-editable set property component
 */

const SetProperty = ({set, setProp, name, content, edit, setComponent, updateSets}) => {
    if (edit == "True") {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {name}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
                <div className="col-xs-2 col-md-2">
                    <button onClick={() => {setComponent(<SetPropertyTextbox set={set} setProp={setProp} name={name} content={content} edit={edit} setComponent={setComponent} updateSets={updateSets}></SetPropertyTextbox>)}} style={{border: '1px solid black', float: "left"}}>Edit</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4 h-100" style={{border: '1px solid black', height: "100px"}}>
                    <div style={{border: '1px solid black'}}>
                        {name}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

export default SetProperty;