import React, { Component } from 'react';

/*
    Used as a display component as part of the SetList.jsx component
*/

document.title="SetField.jsx"

const SetField = ({name, uid}) => {
    return(
        <div>
            <div>{name}</div>
            <div>{uid}</div>
        </div>
    )
}

export default SetField;