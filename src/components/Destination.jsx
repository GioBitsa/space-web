import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import Page from './Page';
import {smallDesktop, tablet, mobile} from '../Responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
    min-height: 90vh;
    position: relative;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    padding: 0 60px;
    margin: 0 auto;
    position: relative;

    ${smallDesktop({
        padding: "0 40px"
    })}

    ${tablet({
        flexDirection: "column",
        padding: "0 30px",
        justifyContent: "center"
    })}
`;

const Title = styled.div`
    color: white;
    font-size: 28px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
    position: initial;
    top: 12%;
    left: 0;
    text-transform: uppercase;

    @media screen and (min-width: 1240px) and (min-height: 800px){
        position: absolute;
    }

    ${tablet({
        marginBottom: "20px",
        fontSize: "20px",
    })}

    ${mobile({
        fontSize: "16px",
        justifyContent: "center"
    })}

`;

const TitleSpan = styled.span`
    color: #D0D6F9;
    letter-spacing: 2px;
`;

const TitleText = styled.div`
    margin-left: 10px;
    letter-spacing: 2px;
`;

const Left = styled.div`
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${smallDesktop({
        marginRight: "20px"
    })}

    ${tablet({
        width: "100%",
        marginRight: "0",
        flex: "initial",
        marginBottom: "20px"
    })}
`;

const Image = styled.img`
    width: 400px;
    max-width: 400px;

    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    cursor: grab;
    position: relative;

    ${smallDesktop({
        width: "350px"
    })}

    ${tablet({
        margin: "0 auto",
        width: "250px"
    })}

    ${mobile({
        width: "100%",
        maxWidth: "220px"
    })}
    
`;

const Right = styled.div`
    flex: 1;
    max-width: 500px;
    color: white;

    ${tablet({
        flex: "initial",
        textAlign: "center"
    })}
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    ${tablet({
        justifyContent: "center"
    })}
`;

const NavItem = styled(Link)`
    margin-right: 20px;
    padding: 10px 0;
    letter-spacing: 2.7px;
    cursor: pointer;
    position: relative;
    color: white;
    text-decoration: none;

    ::after{
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: ${props=>props.active === "active" ? "100%" : "0"};
        height: 3px;
        background-color: ${props=>props.active === "active" ? "white" : "#979797"};
        transition: all 0.5s ease;
    }

    &:hover::after{
        width: 100%;
    }
`;

const Name = styled.h2`
    font-size: 100px;
    color: white;
    margin: 20px 0 20px 0;

    ${smallDesktop({
        fontSize: "90px"
    })}

    ${tablet({
        fontSize: "70px",
        margin: "10px 0"
    })}

    ${mobile({
        fontSize: "56px",
        margin: "10px 0 0 0"
    })}
`;

const Desc = styled.p`
    line-height: 2rem;
    font-size: 18px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);

    ${tablet({
        fontSize: "16px",
        paddingBottom: "20px"
    })}

    ${mobile({
        fontSize: "15px"
    })}
`;

const InfoContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

    ${mobile({
        flexDirection: "column"
    })}
`;

const InfoItem = styled.div`
    flex: 1;
`;

const InfoSpan = styled.div`
    margin-bottom: 10px;
    color: #D0D6F9;
    font-size: 14px;
`;

const InfoNumber = styled.h6`
    font-size: 28px;
`;



const Destination = (props) => {
    return (
        <>
            <Page src={"destination"} />
            <Navbar active={2} />
            <Container>
                <Wrapper>
                    <Left>
                        <Title>
                            <TitleSpan>01</TitleSpan>
                            <TitleText>PICK YOUR DESTINATION</TitleText>
                        </Title>
                        <Image src={props.imageSrc} />
                    </Left>
                    <Right>
                        <NavList>
                            <NavItem to="/destination/moon" active={props.active === 1 && "active"}>MOON</NavItem>
                            <NavItem to="/destination/mars" active={props.active === 2 && "active"}>MARS</NavItem>
                            <NavItem to="/destination/europa" active={props.active === 3 && "active"}>EUROPA</NavItem>
                            <NavItem to="/destination/titan" active={props.active === 4 && "active"}>TITAN</NavItem>
                        </NavList>
                        <Name>{props.name}</Name>
                        <Desc>{props.desc}</Desc>
                        <InfoContainer>
                            <InfoItem>
                                <InfoSpan>AVG. DISTANCE</InfoSpan>
                                <InfoNumber>{props.infoDistance}</InfoNumber>
                            </InfoItem>
                            <InfoItem>
                                <InfoSpan>EST. TRAVEL TIME</InfoSpan>
                                <InfoNumber>{props.infoTime}</InfoNumber>
                            </InfoItem>
                        </InfoContainer>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Destination
