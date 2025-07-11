import React, { Component } from 'react';

/*
    Used as a display component as part of the SetList.jsx component
*/

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