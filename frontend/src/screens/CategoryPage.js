import React, {useEffect, useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'
import MusicBox from '../components/MusicBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons'

import './css/MainPage.css'

function CategoryPage() {
    const [filterData, setFilterData] = useState([])

    const location = useLocation()

    let category = location.search.slice(10)
    const url = "/category?category="+ category

    useEffect(() => {
        if(category === "late%2019th"|| category === "late_2019th"){
            category = "late 19th"
        }
        axios.get('http://localhost:8080/v1/music/', {
        'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => {
            let temp = []
            for(let i = 0; i< res.data.musicItems.length; ++i){
                if(res.data.musicItems[i].category.toLowerCase() === category){
                    temp.push(res.data.musicItems[i])
                }
            }
            setFilterData(temp)
        })
        .catch(err => console.log(err))
    }, [category])

    return (
        <div className="mainpage-container">
            <div className="side-section">
                <p className="category-title">Categories</p>
                <Link to="/category?category=classical">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                        <p>Classical</p>
                    </div>
                </Link>
                <Link to="/category?category=baroque">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                        <p>Baroque</p>
                    </div>
                </Link>
                <Link to="/category?category=romantic">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                        <p>Romantic</p>
                    </div>
                </Link>
                <Link to="/category?category=late 19th">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                        <p>Late 19th</p>
                    </div>
                </Link>
            </div>
            <div className="main-section">
                <p><Link to="/">Home > </Link> <Link to={url}> {category.replace(category[0],category[0].toUpperCase())} </Link> </p>

                <h2>All {category.replace(category[0],category[0].toUpperCase())} </h2>

                <div className="music-section">
                    
                    {
                        filterData.map((musicItem) => <Link to={`/music/${musicItem._id}`}><MusicBox item={musicItem} /></Link>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default CategoryPage
