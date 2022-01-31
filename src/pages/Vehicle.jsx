import React from 'react'
import Technology from '../components/Technology'


const Vehicle = () => {
    return (
        <>
            <Technology
                active={1}
                textTitle="LAUNCH VEHICLE"
                desc="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                imageSrc="https://i.ibb.co/HCVJpC6/image-launch-vehicle-portrait.jpg"
            />
        </>
    )
}

export default Vehicle
