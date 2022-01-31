import React from 'react'
import Destination from '../components/Destination'

const Titan = () => {
    return (
        <>
            <Destination
                src={"destination"}
                imageSrc="https://i.ibb.co/vjjLqQK/image-titan.png"
                active={4}
                name="TITAN"
                desc="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                infoDistance="1.6 BIL. KM"
                infoTime="7 YEARS"
            />
        </>
    )
}

export default Titan