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
    sets.map((set, index) => (
        console.log(set.id)
    ))
    return (
        <div>
            {sets.map((set, index) => (
                <div key={set.id} style={{border: '1px solid black'}}>
                    <SetField name={set.name} id={set.id}/>
                    <Link to={'/sets/' + set.id}>View</Link>
                </div>
            ))}
        </div>
    )
}

export default SetList;