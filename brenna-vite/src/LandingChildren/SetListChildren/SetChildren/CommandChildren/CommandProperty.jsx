import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommandPropertyTextbox from './CommandPropertyTextbox.jsx'

const CommandProperty = ({command, commandProp, name, content, edit, loadCommand}) => {
const [IsEdit, commandIsEdit] = useState(false)

if (edit == "True") {
    if (IsEdit == false) {
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
                    <button onClick={() => commandIsEdit(true)} style={{border: '1px solid black', float: "left"}}>Edit</button>
                </div>
            </div>
        )
    } else {
        return (<CommandPropertyTextbox command={command} commandProp={commandProp} name={name} content={content} edit={edit} loadCommand={loadCommand} commandIsEdit={commandIsEdit}></CommandPropertyTextbox>)
    }
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

export default CommandProperty;