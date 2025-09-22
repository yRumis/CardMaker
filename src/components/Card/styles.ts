import styled from "styled-components";
import type { ICardBack, ICardName } from "./types";

export const CardContainer = styled.section<ICardBack>`
    background-color:blue;
    width: 320px;
    height: 450px;
    padding: 1rem;
    display: flex;
    background-image: url(${props => props.backGround});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius:12px;
    
    
    
`;

export const CardSectionForNameAndAtribute = styled.section`
    display: flex;
    background-color:yellow;
    width: 100%;
    height: 30px;
    padding:4px;
    `

export const CardNameContainer = styled.section`
    width: 100%;
    overflow: hidden;
`;

export const CardNameText = styled.p<ICardName>`
    font-size: 1.2rem;
    display: inline-block;
    transform-origin: left;
    width: auto;
    color: ${props => props.isTextWhite ? "white" : "black"};
`