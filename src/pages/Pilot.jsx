import React from 'react';
import Crew from "../components/Crew";

const Pilot = () => {
    return (
        <>
            <Crew 
                subTitle="PILOT"
                name="Victor Glover"
                desc="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                active={3}
                imageSrc="https://i.ibb.co/BGFgf7N/image-victor-glover.png"
            />
        </>
    )
}

export default Pilot