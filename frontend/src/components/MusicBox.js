import React from 'react'

import './css/musicbox.css'

function MusicBox(props) {
    const musicItem = props.item;
    return (
        <div className="musicbox-container">
            <img 
                className="music-image"
                alt="music_image"
                src={musicItem.music_image} />
            <p className="musicbox-name">{musicItem.name}</p>
            <p>Composer: <b>{musicItem.composer}</b></p>
            <p>Price: <b>HKD{musicItem.price}</b></p>
            {
                musicItem.new_arrival ? <p className="new-arrival">New Arrival!</p> : ""
            }
        </div>
    )
}

export default MusicBox
