import React from 'react'
import Destination from '../components/Destination'

const Moon = () => {
    return (
        <>
            <Destination
                src={"destination"}
                imageSrc="https://i.ibb.co/HpN9b1T/image-moon.png"
                active={1}
                name="MOON"
                desc="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                infoDistance="384,400 KM"
                infoTime="3 DAYS"
            />
        </>
    )
}

export default Moon
