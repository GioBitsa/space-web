import React from 'react';
import Crew from "../components/Crew";

const Commander = () => {
    return (
        <>
            <Crew 
                subTitle="COMMANDER"
                name="DOUGLAS HURLEY"
                desc="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                active={1}
                imageSrc="https://i.ibb.co/b61J5n4/image-douglas-hurley.png"
            />
        </>
    )
}

export default Commander
