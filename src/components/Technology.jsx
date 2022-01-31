import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar'
import Page from './Page';
import {smallDesktop, tablet, mobile} from '../Responsive';


const Container = styled.div`
    min-height: 90vh;
    position: relative;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
`;

const Title = styled.div`
    font-size: 28px;
    align-self: flex-start;
    padding: 0 60px;

    ${smallDesktop({
        padding: "0 40px"
    })}

    ${mobile({
        margin: "0 auto",
        padding: "0"
    })}
`;

const TitleSpan = styled.span`
    letter-spacing: 2px;
    color: #D0D6F9;
`;

const TitleText = styled.span`
    letter-spacing: 2px;
    color: white;
    margin-left: 10px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 0 60px;
    margin-top: 50px;

    ${smallDesktop({
        padding: "0 40px"
    })}

    ${tablet({
        flexDirection: "column-reverse",
        justifyContent: "center",
        marginTop: "25px",
        textAlign: "center",
        padding: "0 30px"
    })}

    ${mobile({
        padding: "0 15px"
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    ${tablet({
        flexDirection: "column"
    })}
`;

const Nav = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 10px;

    ${tablet({
        flexDirection: "row"
    })}
`;

const NavItem = styled(Link)`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${props=>props.active ? "white" : "transparent"};
    color: ${props=>props.active ? "#0B0D17" : "white"};
    border: 1px solid ${props=>props.active ? "white" : "rgba(255,255,255,0.5)"};
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 32px;
    text-decoration: none;

    ${smallDesktop({
        width: "50px",
        height: "50px",
        fontSize: "28px",
    })}

    ${tablet({
        margin: "20px 10px",
        fontSize: "24px"
    })}

    ${mobile({
        fontSize: "16px"
    })}
`;

const TextContent = styled.div`
    flex: 4;
`;

const SubTitle = styled.span`
    color: #D0D6F9;
    font-size: 16px;

    ${mobile({
        fontSize: "14px"
    })}
`;

const TextTitle = styled.h3`
    font-size: 56px;
    margin: 5px 0 20px 0;

    ${tablet({
        fontSize: "40px"
    })}

    ${mobile({
        fontSize: "24px"
    })}
`;

const Desc = styled.div`
    font-size: 18px;
    color: #D0D6F9;
    line-height: 1.5rem;

    ${tablet({
        fontSize: "16px"
    })}

    ${mobile({
        fontSize: "15px"
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    ${tablet({
        width: "100%",
    })}
`;

const Image = styled.img`
    width: 80%;
    max-width: 400px;
    height: 80%;
    object-fit: cover;
    margin: 0 auto;

    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    ${tablet({
        width: "100%",
        maxWidth: "initial",
        height: "350px",
    })}

`;



const Technology = (props) => {
    return (
        <>
            <Page src={"technology"} />
            <Navbar active={4} />
            <Container>
                <Wrapper>
                    <Title>
                        <TitleSpan>03</TitleSpan>
                        <TitleText>SPACE LAUNCH 101</TitleText>
                    </Title>
                    <Content>
                        <Left>
                            <Nav>
                                <NavItem to="/technology/vehicle" active={props.active === 1 && "active"}>1</NavItem>
                                <NavItem to="/technology/spacesport" active={props.active === 2 && "active"}>2</NavItem>
                                <NavItem to="/technology/capsule" active={props.active === 3 && "active"}>3</NavItem>
                            </Nav>
                            <TextContent>
                                <SubTitle>THE TERMINOLOGY…</SubTitle>
                                <TextTitle>{props.textTitle}</TextTitle>
                                <Desc>{props.desc}</Desc>
                            </TextContent>
                        </Left>
                        <Right>
                            <Image src={props.imageSrc} />
                        </Right>
                    </Content>
                </Wrapper>
            </Container>
        </>
    )
}

export default Technology
