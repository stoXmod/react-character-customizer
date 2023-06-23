import {Affix} from "@mantine/core";
import {useCharacterCustomization,} from "../contexts/CharacterCustomizationContext";

const Interface = () => {
    const { setCameraMode } =
        useCharacterCustomization();
    return (
        <>
            <Affix position={{ top: 20, right: 20 }}>
                <button
                    onClick={() => setCameraMode('INIT')}
                >
                    Reset Position
                </button>
            </Affix>
        </>
    );
};

export default Interface;
