import type { FC } from "react";
import { CardContainer } from "./styles";
import type { ICardView } from "./types";

export const  ViewCard: FC<ICardView> = ({currentCardBack}) => { 
    return (
        <CardContainer backGround={currentCardBack}>

        </CardContainer>
    );
}