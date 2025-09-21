import styled from "styled-components";
import type { ICardBack } from "./types";

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
`;