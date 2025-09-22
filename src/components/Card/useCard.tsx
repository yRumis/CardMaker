import BackGroundFire from '../../../public/basic-fire.png';


export const useCard = () => {

const mappedBackgrounds = {
        fire: BackGroundFire,
        }

const currentCardBack = mappedBackgrounds['fire'];

const isTextWhite = true;

    return {
        currentCardBack,
        isTextWhite,
    };
}