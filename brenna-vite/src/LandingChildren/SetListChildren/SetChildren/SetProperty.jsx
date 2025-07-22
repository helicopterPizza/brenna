import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SetPropertyTextbox from './SetPropertyTextbox.jsx'

/*
    Non-editable set property component
 */

const SetProperty = ({set, setProp, name, content, edit, loadSet}) => {
    const [IsEdit, setIsEdit] = useState(false)

    console.log(IsEdit)


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
                        <button onClick={() => setIsEdit(true)} style={{border: '1px solid black', float: "left"}}>Edit</button>
                    </div>
                </div>
            )
        } else {
            return (<SetPropertyTextbox set={set} setProp={setProp} name={name} content={content} edit={edit} loadSet={loadSet} setIsEdit={setIsEdit}></SetPropertyTextbox>)
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

export default SetProperty;