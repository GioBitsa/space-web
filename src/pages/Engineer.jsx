import React from 'react';
import Crew from "../components/Crew";

const Engineer = () => {
    return (
        <>
            <Crew 
                subTitle="Flight Engineer"
                name="Anousheh Ansari"
                desc="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                active={4}
                imageSrc="https://i.ibb.co/1rhPpvN/image-anousheh-ansari.png"
            />
        </>
    )
}

export default Engineer