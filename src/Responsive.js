import {css} from "styled-components";

export const smallDesktop = (props) => {
    return css`
        @media screen and (max-width: 1100px){
            ${props}
        }
    `
}


export const tablet = (props) => {
    return css`
        @media screen and (max-width: 768px){
            ${props}
        }
    `
}


export const mobile = (props) => {
    return css`
        @media screen and (max-width: 450px){
            ${props}
        }
    `
}