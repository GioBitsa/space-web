import React from 'react'
import Destination from '../components/Destination'

const Mars = () => {
    return (
        <>
            <Destination
                src={"destination"}
                imageSrc="https://i.ibb.co/ZX20bvZ/image-mars.png"
                active={2}
                name="MARS"
                desc="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                infoDistance="225 MIL. KM"
                infoTime="9 MONTHS"
            />
        </>
    )
}

export default Mars