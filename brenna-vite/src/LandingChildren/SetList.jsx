import React, { Component, useEffect, useState } from 'react';
import SetField from './SetListChildren/SetField.jsx'
import Set from './SetListChildren/Set.jsx'
import { Link } from 'react-router-dom';

/*
    Shows the list of sets on the landing page.
    Navigates to:
        -> Set.jsx (when a set is clicked with "view")
 */

const SetList = ({sets}) => {
    return (
        <div>
            {sets.map((set, index) => (
                <div key={set.uid} style={{border: '1px solid black'}}>
                    <SetField name={set.name} uid={set.uid}/>
                    <Link to={'/sets/' + set.uid}>View</Link>
                </div>
            ))}
        </div>
    )
}

export default SetList;