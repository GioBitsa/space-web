import React from 'react'
import Destination from '../components/Destination'

const Europa = () => {
    return (
        <>
            <Destination
                src={"destination"}
                imageSrc="https://i.ibb.co/Hx38JZc/image-europa.png"
                active={3}
                name="EUROPA"
                desc="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                infoDistance="628 MIL. KM"
                infoTime="3 YEARS"
            />
        </>
    )
}

export default Europa