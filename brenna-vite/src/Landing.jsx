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
    const [currentSet, setCurrentSet] = useState([])
    const [page, setPage] = useState([])

    function UpdateSets() {
        const setsListUrl = 'http://localhost:8000/brenna/sets/fetch_all'
        const res = axios.post(setsListUrl)
            .then(response => setSets(response.data))
    }

    useEffect(() => {
        const setsListUrl = 'http://localhost:8000/brenna/sets/fetch_all'
        const res = axios.post(setsListUrl)
            .then(response => {setPage(<SetList sets={response.data} setPage={setPage} updateSets={UpdateSets}/>); setSets(response.data)})
    }, [])


    function CreateCommands(){
        const body = {uid: 20, name: "clicktest TWO", description: "testing clicks again", url: "wikipedia.com"}
        const response = axios.post('http://localhost:8000/brenna/sets/create', body)

        const body2 = {uid: 1, set_uid: 10, step_id: 1, action: 'click', locator: 'title', locator_val: 'apple'}
        const response2 = axios.post('http://localhost:8000/brenna/commands/create', body)

        const body3 = {uid: 2, set_uid: 10, step_id: 2, action: 'click', locator: 'title', locator_val: 'pear'}
        const response3 = axios.post('http://localhost:8000/brenna/commands/create', body)

        const body4 = {uid: 3, set_uid: 10, step_id: 3, action: 'click', locator: 'title', locator_val: 'orange'}
        const response4 = axios.post('http://localhost:8000/brenna/command', body)
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

    return(page)
}

export default Landing
