import type { FC } from "react";
import { ViewCard } from "./ViewCard";
import { useCard } from "./useCard";

export const Card: FC = () => {
    return <ViewCard {...useCard()}/>;
}