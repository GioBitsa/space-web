import React from 'react';
import Page from "./Page";
import Navbar from './Navbar';
import styled from 'styled-components';
import { smallDesktop, tablet, mobile } from '../Responsive';
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

    ${tablet({
        flexDirection: "column",
        padding: "0 30px"
    })}

    ${mobile({
        padding: "0 15px",
        flexDirection: "column-reverse"
    })}
    
`;

const Left = styled.div`
    flex: 1;
    height: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-evenly;

    ${smallDesktop({
        marginRight: "10px"
    })}
    ${tablet({
        marginRight: "0",
        padding: "20px 0"
    })}
`;

const Title = styled.div`
    font-size: 28px;

    ${tablet({
        fontSize: "20px",
        marginBottom: "20px"
    })}

    ${mobile({
        textAlign: "center",
        fontSize: "16px"
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
    color: white;

    ${tablet({
        textAlign: "center"
    })}
`;

const SubTitle = styled.h3`
    font-size: 32px;
    color: #D0D6F9;
    text-transform: uppercase;

    ${smallDesktop({
        fontSize: "27px"
    })}

    ${tablet({
        fontSize: "24px"
    })}

    ${mobile({
        fontSize: "16px"
    })}
`;

const Name = styled.h2`
    font-size: 56px;
    margin: 20px 0;
    text-transform: uppercase;

    ${smallDesktop({
        fontSize: "50px"
    })}

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
    line-height: 2rem;

    ${tablet({
        fontSize: "16px"
    })}

    ${mobile({
        fontSize: "15px"
    })}
`;

const ButtonList = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${tablet({
        justifyContent: "center",
        marginTop: "20px"
    })}
`;

const ButtonItem = styled(Link)`
    width: 15px;
    height: 15px;
    background-color: ${props=>props.active ? "white" : "#979797"};
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-self: flex-end;

    ${tablet({
        alignSelf: "center",
        alignItems: "center",
        width: "100%"
    })}
`;

const Image = styled.img`
    width: 80%;
    max-width: 350px;
    height: 80%;
    object-fit: cover;
    margin: 0 auto;

    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    ${smallDesktop({
        width: "100%",
        height: "100%"
    })}

    ${mobile({
        width: "100%",
        maxWidth: "200px",
        height: "auto",
        objectFit: "initial"
    })}

`;



const Crew = (props) => {
    return (
        <>
            <Page src={"crew"} />
            <Navbar active={3} />
            <Container>
                <Wrapper>
                    <Left>
                        <Title>
                            <TitleSpan>02</TitleSpan>
                            <TitleText>MEET YOUR CREW</TitleText>
                        </Title>
                        <Content>
                            <SubTitle>{props.subTitle}</SubTitle>
                            <Name>{props.name}</Name>
                            <Desc>{props.desc}</Desc>
                        </Content>
                        <ButtonList>
                            <ButtonItem to="/crew/commander" active={props.active === 1 && "active"} />
                            <ButtonItem to="/crew/specialist" active={props.active === 2 && "active"} />
                            <ButtonItem to="/crew/pilot" active={props.active === 3 && "active"} />
                            <ButtonItem to="/crew/engineer" active={props.active === 4 && "active"} />
                        </ButtonList>
                    </Left>
                    <Right>
                        <Image src={props.imageSrc} />
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Crew
