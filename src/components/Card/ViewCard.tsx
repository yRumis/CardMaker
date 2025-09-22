import type { FC } from "react";
import { 

    CardContainer,
    CardNameContainer,
    CardNameText, 
    CardSectionForNameAndAtribute 

} from "./styles";
import type { ICardView } from "./types";

export const  ViewCard: FC<ICardView> = ({
    currentCardBack,
    isTextWhite,
    cardName
    }) => { 
    return (

        <CardContainer backGround={currentCardBack}>
            <CardSectionForNameAndAtribute>
                <CardNameContainer>
                    <CardNameText isTextWhite={isTextWhite}>
                        {cardName}
                    </CardNameText>
                </CardNameContainer>
            </CardSectionForNameAndAtribute>
        </CardContainer>
    );
}