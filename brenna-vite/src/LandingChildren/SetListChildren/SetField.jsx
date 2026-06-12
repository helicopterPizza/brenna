import React, { Component } from 'react';

/*
    Used as a display component as part of the SetList.jsx component
*/

document.title="SetField.jsx"

const SetField = ({id, name, description}) => {
    return(
        <div>
            <div><i>{id}</i></div>
            <div><b>{name}</b></div>
            <div>{description}</div>
        </div>
    )
}

export default SetField;