import theme from 'styled-theming';
import {siteColors} from "../../variables/sitecolors";

export const backgroundColor = theme.variants('mode', 'variant', {
    primary: {day: siteColors.white, night: "#132d4e"},
    secondary: {day: siteColors.black, night: "#650b0b"},
});

export const textColor = theme.variants('mode', 'variant', {
    primary: {day: siteColors.black, night: siteColors.white},
    secondary: {day: siteColors.softBlack, night: "white"},
});