import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import MusicBox from '../components/MusicBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons'

import './css/MainPage.css'

function SearchPage() {
    const { query } = useParams()
    const [searchData, setSearchData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/v1/music/', {
        'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => {
            let temp = []
            for(let i=0; i<res.data.musicItems.length; ++i){
                if(res.data.musicItems[i].name.includes(query) || res.data.musicItems[i].category.includes(query) || res.data.musicItems[i].composer.includes(query) || res.data.musicItems[i].description.includes(query) ){
                    temp.push(res.data.musicItems[i])
                }
            }
            setSearchData(temp)
            setFilterData(temp)

        })
        .catch(err => console.log(err))
        
    }, [query])

    const handleFilterData = (category) => {
        let temp = []
        for(let i=0; i<searchData.length; ++i){
            if(searchData[i].category === category){
                temp.push(searchData[i])
            }
        }
        setFilterData(temp)
    }


    return (
        <div className="mainpage-container">
            <div className="side-section">
                <p className="category-title">Categories</p>
                <div className="category-container" onClick={() => handleFilterData("Classical")}>
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Classical</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Baroque")}>
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Baroque</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Romantic")}>
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Romantic</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Late 19th")}>
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Late 19th</p>
                </div>
            </div>
            <div className="main-section">
                <Link to="/">Home </Link> 
                <h3>Searching Results</h3>
                <div className="music-section">
            
                {
                    filterData.map((musicItem) => <Link to={`/music/${musicItem._id}`}><MusicBox item={musicItem} /></Link>)
                }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
