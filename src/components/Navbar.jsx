import { MenuOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from '../Responsive';


const Container = styled.div`
    width: 100%;
    height: 10vh;
`;

const Wrapper = styled.div`
    padding: 20px 60px;
    display: flex;
    align-items: center;
    background-color: transparent;

    ${tablet({
        padding: "0 30px",
        justifyContent: "space-between",
        backgroundColor: "#0B0D17"
    })}

    ${mobile({
        padding: "0 15px",
        height: "80px",
    })}
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    position: relative;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const CenterHr = styled.hr`
    flex: 7;
    box-shadow: -.25px 0 0 #979797;
    opacity: 0.3;
    transform: translateX(25px);


    ${tablet({
        display: "none"
    })}
`;


const Right = styled.div`
    width: 100%;
    flex: 10;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;

const BluredBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:black;
    background:rgba(151,151,151,0.3);

    filter:blur(1px);
    -o-filter:blur(1px);
    -ms-filter:blur(1px);
    -moz-filter:blur(1px);
    -webkit-filter:blur(1px);

    ${tablet({
        display: "none"
    })}

`;

const MenuList = styled.div`
    display: flex;
    padding-left: 50px;
    position: relative;
    
    ${tablet({
        paddingLeft: "20px"
    })}

    ${mobile({
        flexDirection: "column",
        backgroundColor: "red",
        width: "200px",
        zIndex: "10",
        position: "absolute",
        top: "10vh"
    })}
`;

const MenuListItem = styled(Link)`
    margin-right: 30px;
    color: white;
    cursor: pointer;
    padding: 25px 5px;
    position: relative;
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

    ${tablet({
        marginRight: "20px",
        padding: "30px 5px"
    })}
`;

const Number = styled.span`
    margin-right: 10px;
    font-weight: bold;
    letter-spacing: 1px;

    ${tablet({
        display: "none"
    })}
`;

const LinkItem = styled.a`
    color: white;
    letter-spacing: 1px;
`;

const BarContainer = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    

    ${mobile({
        display: "flex"
    })}

`;


const Navbar = (props) => {

    const [barOpen, setBarOpen] = useState(false);


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src="https://i.ibb.co/tLrHHYY/logo.png" />
                </Left>
                <CenterHr />
                <Right>
                    <BluredBackground />
                    <MenuList barOpen={barOpen}>
                        <MenuListItem to="/" active={props.active === 1 && "active"}>
                            <Number>00</Number>
                            <LinkItem>HOME</LinkItem>
                        </MenuListItem>
                        <MenuListItem to="/destination" active={props.active === 2 && "active"}>
                            <Number>01</Number>
                            <LinkItem>DESTINATION</LinkItem>
                        </MenuListItem>
                        <MenuListItem to="/crew" active={props.active === 3 && "active"}>
                            <Number>02</Number>
                            <LinkItem>CREW</LinkItem>
                        </MenuListItem>
                        <MenuListItem to="/technology" active={props.active === 4 && "active"}>
                            <Number>03</Number>
                            <LinkItem>TECHNOLOGY</LinkItem>
                        </MenuListItem>
                    </MenuList>
                    <BarContainer onClick={() => {setBarOpen(!barOpen)}}>
                        <MenuOutlined />
                    </BarContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
