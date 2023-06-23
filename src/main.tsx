import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomizationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
            <CharacterCustomizationProvider>
                <CharacterAnimationsProvider>
                    <App />
                </CharacterAnimationsProvider>
            </CharacterCustomizationProvider>
    </React.StrictMode>
);
