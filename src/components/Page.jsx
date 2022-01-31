import React, {useState} from 'react'
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
`;

const Background = styled.img`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    z-index: -1;
`;

const Page = (props) => {

    const [src, setSrc] = useState("");

    function handleResize() {
        if (props.src === "home"){
            if(window.innerWidth < 500){
                setSrc("https://i.ibb.co/gtnxp52/background-home-mobile.jpg")
            }else if(window.innerWidth < 768){
                setSrc("https://i.ibb.co/WFFN4tN/background-home-tablet.jpg")
            }else{
                setSrc("https://i.ibb.co/F8SNgrZ/background-home-desktop.jpg")
            }
        }else if (props.src === "destination"){
            if(window.innerWidth < 500){
                setSrc("https://i.ibb.co/tQNFnNt/background-destination-mobile.jpg")
            }else if(window.innerWidth < 768){
                setSrc("https://i.ibb.co/SQnys7t/background-destination-tablet.jpg")
            }else{
                setSrc("https://i.ibb.co/F0GLjtv/background-destination-desktop.jpg")
            }
        }else if (props.src === "crew"){
            if(window.innerWidth < 500){
                setSrc("https://i.ibb.co/DYvC9cf/background-crew-mobile.jpg")
            }else if(window.innerWidth < 768){
                setSrc("https://i.ibb.co/wrJdNWb/background-crew-tablet.jpg")
            }else{
                setSrc("https://i.ibb.co/XpxrcTs/background-crew-desktop.jpg")
            }
        }else if (props.src === "technology"){
            if(window.innerWidth < 500){
                setSrc("https://i.ibb.co/J33rxW2/background-technology-mobile.jpg")
            }else if(window.innerWidth < 768){
                setSrc("https://i.ibb.co/vYN2Fvd/background-technology-tablet.jpg")
            }else{
                setSrc("https://i.ibb.co/QkhsYFK/background-technology-desktop.jpg")
            }
        }
    }

    window.addEventListener('click', handleResize);
    window.addEventListener('load', handleResize)
    window.addEventListener('loadeddata', handleResize)
    window.addEventListener('resize', handleResize)


    return (
        <Container>
            <Background src={src} />
        </Container>
    )
}

export default Page
