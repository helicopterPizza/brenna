import { useEffect, useState } from 'react'
import axios from 'axios'
import './Sets.css'
import SetList from './LandingChildren/SetList.jsx'
import 'bootstrap/dist/css/bootstrap.css'

/*
    Landing page
 */

function Landing() {
    const [sets, setSets] = useState([])

    useEffect(() => {
        const setsListUrl = 'http://localhost:8000/brenna/sets/fetch_all'
        const res = axios.get(setsListUrl).then(response => {
            setSets(response.data)
        })
    }, [])


    function CreateCommands(){
        //const body = {uid: 20, name: "clicktest TWO", description: "testing clicks again", url: "wikipedia.com"}
        //const response = axios.post('http://localhost:8000/brenna/sets/create', body)
        console.log("hi")
        const body2 = {uid: 1, set_uid: 10, step_id: 1, action: 'click', locator: 'title', locator_val: 'apple'}
        const response2 = axios.post('http://localhost:8000/brenna/commands/create', body2)
    }

    function FetchSet() {
        const body = {uid: '10'}
        const response = axios.post('http://localhost:8000/brenna/sets/fetch', body)
        console.log(response)
    }

    function FetchAllSets() {
        const response = axios.post('http://localhost:8000/brenna/sets/fetch_all')
        console.log(response)
    }

    return(
        <div>
            <SetList sets={sets}/>
        </div>
    )
}

export default Landing
