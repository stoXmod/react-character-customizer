import { Affix, Button, Group } from "@mantine/core";
import {
    CameraModes,
    useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
import { BottomConfigurator } from "./BottomConfigurator";
import { HeadConfigurator } from "./HeadConfigurator";
import { TopConfigurator } from "./TopConfigurator";

const Interface = () => {
    const { cameraMode, setCameraMode } =
        useCharacterCustomization();
    return (
        <>
            <Affix position={{ top: 20, right: 20 }}>
                <Group>
                    {Object.keys(CameraModes).map((mode) => (
                        <Button
                            key={mode}
                            variant={mode === cameraMode ? "filled" : "light"}
                            onClick={() => setCameraMode(mode)}
                        >
                            {mode}
                        </Button>
                    ))}
                </Group>
            </Affix>
            <Affix position={{ top: 50, right: 20 }}>
                {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
                {cameraMode === CameraModes.TOP && <TopConfigurator />}
                {cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
            </Affix>
        </>
    );
};

export default Interface;
