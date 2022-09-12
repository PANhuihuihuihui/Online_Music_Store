import React, {useEffect, useState} from 'react'
import './css/Music.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// resolve: {
//     modules: [
//         'node_modules', // 先找这个
//         path.resolve(__dirname, 'src/common'), // node_modules没有再找这个
//         path.resolve(__dirname, 'src/component'), // common没有再找这个
//     ]
// }

const handleAddToCart = (data, qty) => {


        let currCart = JSON.parse(localStorage.getItem("cart"));

        let newCartItem = {
            data,
            qty
        }

        if(currCart !== null) {
            currCart = [...currCart, newCartItem]
        }
        else{
            currCart = [newCartItem]
        }
        localStorage.setItem('cart', JSON.stringify(currCart))
        alert("Successfully Add "+ qty +" To Cart")
        // window.open('/cart', '_self')

    
}


function Music() {
    const [qty, setQty] = useState(1)
    const { id } = useParams()
    const [item] = useState(id)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/music/${item}`, {
            'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => setData(res.data.music))
        .catch(err => console.log(err))
    }, [item])
    // console.log(data)
    // data.music_image
    // var path = require('../../public/' + 'img_1.jpg' )
    return (
    <div>

        <div className="music-box">
        <p className = "header"><Link to="/">Home > </Link> <Link to={window.location.pathname}> {data.name} </Link> </p>    
            <h1 className="music-box-title">{data.name}</h1>
            <img 
                src={"http://localhost:3000/"+ data.music_image}
                alt="musicimg"
                className="music-image"
            />
            <audio controls className="audio">
                <source src={"http://localhost:3000/"+ data.music_clip} type="audio/ogg" />
                <source src={"http://localhost:3000/"+ data.music_clip} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>    
            <p className="music-box-desc">
                {data.description}
            </p>
            <div className="music-box-info-text">
                <p> Composer: <b>{data.composer}</b></p>
                <p> Published: <b>{data.published}</b></p>
            </div>
            <div className="music-box-info-text">
                <p>New Arrival: <b>{ data.new_arrival ? 'Yes' : 'No' }</b></p>
                <p>Price: <b>HKD{data.price}</b></p>
            </div>

            <div className="order-block">
                <input 
                    type="text" 
                    placeholder="1"
                    onChange={(e) => setQty(parseInt(e.target.value))}
                    className="qty-music-box" 
                />
                    <button 
                        className="button-order"
                        onClick={() => handleAddToCart(data, qty)}
                    >Add to cart</button>
            </div>
        </div>
    </div>
    )
}

export default Music