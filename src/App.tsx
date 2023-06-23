import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience"
import Interface from "./components/Interface";
import "./App.css";
import { useState } from "react";
import { useCharacterCustomization,    CameraModes } from "./contexts/CharacterCustomizationContext";
import { HeadConfigurator } from "./components/HeadConfigurator";
import { TopConfigurator } from "./components/TopConfigurator";
import { BottomConfigurator } from "./components/BottomConfigurator";

function App() {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const { cameraMode, setCameraMode } =
        useCharacterCustomization();

    const handleClick = (section: string) => {
        setCameraMode(section)
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <>
            <div className="flex justify-between" style={{width: '100vw', height: '100vh'}}>
                <div style={{width: '40%', height: '100vh', overflow: 'hidden auto',  background: 'linear-gradient(45deg, #282c34, #3c3b3f, #0d47a1)'}} className={'flex items-center content-center'}>
                    <div style={{width: '100%'}} className={'p-5'}>
                        <div style={{height: '100px'}}></div>
                        <div className="max-w-md py-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                            <div className="w-full max-w-md mx-auto">
                                {["HEAD", "TOP", "BOTTOM"].map((section) => (
                                    <div key={section} className={`border-b border-gray-200`}>
                                        <button
                                            className={`w-full py-3 px-2 text-left font-bold text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${openSection === section ? 'bg-gray-300' : ''}`}
                                            onClick={() => handleClick(section)}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()}
                                        </button>
                                        {openSection === section && (
                                            <div className={'text-left'}>
                                                {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
                                                {cameraMode === CameraModes.TOP && <TopConfigurator />}
                                                {cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
                <div style={{width: '60%'}}>
                    <Canvas
                        camera={{ position: [0, 1, 2.5], fov: 50 }}
                        shadows
                        gl={{ preserveDrawingBuffer: true }}
                    >
                        <Experience />
                    </Canvas>
                    <Interface />
                </div>
            </div>

        </>
    );
}

export default App;
