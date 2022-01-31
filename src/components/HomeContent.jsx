import React, {useState} from 'react'
import styled, {keyframes} from "styled-components";
import { mobile, smallDesktop, tablet } from '../Responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    padding: 0 60px;

    ${tablet({
        padding: "0 30px",
        flexDirection: "column",
        textAlign: "center"
    })}

    ${mobile({
        padding: "0 15px"
    })}
`;

const Left = styled.div`
    flex: 1;
    color: #D0D6F9;
    width: 500px;

    ${smallDesktop({
        width: "100%",
    })}

    ${tablet({
        marginBottom: "50px"
    })}
`;

const SubTitle = styled.h5`
    font-size: 28px;
    letter-spacing: 4px;
    white-space: nowrap;

    ${smallDesktop({
        fontSize: "21px"
    })}

    ${tablet({
        whiteSpace: "normal",
        fontSize: "18px"
    })}
    ${mobile({
        fontSize: "16px"
    })}
`;

const Title = styled.h1`
    font-size: 150px;
    color: white;
    margin: 10px 0 20px 0;

    ${smallDesktop({
        fontSize: "120px"
    })}
    ${tablet({
        fontSize: "100px"
    })}
    ${mobile({
        fontSize: "80px"
    })}
`;

const Desc = styled.p`
    width: 450px;
    line-height: 1.7rem;

    ${tablet({
        margin: "0 auto",
        width: "400px"
    })}

    ${mobile({
        width: "100%",
        fontSize: "15px"
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const RightContainer = styled.div`
    position: relative;
    width: 250px;
    height: 250px;

    ${smallDesktop({
        width: "200px",
        height: "200px"
    })}

    ${mobile({
        width: "150px",
        height: "150px"
    })}
`;

const ButtonAnimation = keyframes`
    from{
        transform: scale(1)
    }
    to{
        transform: scale(1.5)
    }
`;

const BackgroundAnimation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.5;
    background-color: #979797;
    z-index: 1;

    animation-name: ${props=>props.isHovering && ButtonAnimation};
    animation-duration: ${props=>props.isHovering && "1.5s"};
    animation-iteration-count: infinite;

`;

const Button = styled(Link)`
    border: none;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
    font-size: 32px;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    z-index: 2;

    ${smallDesktop({
        fontSize: "28px"
    })}

    ${mobile({
        fontSize: "20px"
    })}
`;


const HomeContent = () => {

    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
                    <Title>SPACE</Title>
                    <Desc>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Desc>
                </Left>
                <Right>
                    <RightContainer>
                        <BackgroundAnimation isHovering={isHovering} />
                        <Button
                            to="/destination"
                            onMouseEnter={()=>setIsHovering(true)} 
                            onMouseLeave={()=>setIsHovering(false)}>
                            EXPLORE
                        </Button>
                    </RightContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default HomeContent
