import { createContext, useContext, useState } from "react";

type CharacterAnimationProviderProps = {
    children: React.ReactNode;
}

interface CharacterAnimations {
    animationIndex: number;
    animations: [];
    setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
    setAnimations: React.Dispatch<React.SetStateAction<string[]>>;
}

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props: CharacterAnimationProviderProps) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);

    return (
        <CharacterAnimationsContext.Provider
            value={{
                animationIndex,
                setAnimationIndex,
                animations,
                setAnimations,
            }}
        >
            {props.children}
        </CharacterAnimationsContext.Provider>
    );
};

export const useCharacterAnimations = (): CharacterAnimations => {
    return useContext(CharacterAnimationsContext) as CharacterAnimations;
};
