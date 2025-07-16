import React, { Component } from 'react';
import SetField from './SetListChildren/SetField.jsx'
import Set from './SetListChildren/Set.jsx'

/*
    Shows the list of sets on the landing page.
    Navigates to:
        -> Set.jsx (when a set is clicked with "view")
 */

const SetList = ({sets, setPage}) => {
    return (
        <div>
            {sets.map((set, index) => (
                <div key={set.uid} style={{border: '1px solid black'}}>
                    <SetField name={set.name} uid={set.uid}/>
                    <button onClick={() => {setPage(<Set set={set}></Set>); document.title="SetField.jsx"}}>View</button>
                </div>
            ))}
        </div>
    )
}

export default SetList;