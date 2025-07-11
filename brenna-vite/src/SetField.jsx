import React, { Component } from 'react';

document.title="SetField.jsx"

function SetField(props) {
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.uid}</div>
        </div>
    )
}

export default SetField;