import { createContext } from "react"

export const backgroundColors = {
    primary: "primary",
    blue: "blue",
    green: "green",
    yello: "yellow",
    white: "white",

};

export const BackgroundColorContext = createContext({
    color: backgroundColors.blue,
    changeColor: (color) => {},
});