import React from 'react';
import Crew from "../components/Crew";

const Specialist = () => {
    return (
        <>
            <Crew 
                subTitle="Mission Specialist"
                name="MARK SHUTTLEWORTH"
                desc="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                active={2}
                imageSrc="https://i.ibb.co/WK0nRm0/image-mark-shuttleworth.png"
            />
        </>
    )
}

export default Specialist