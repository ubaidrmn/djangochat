import { styled } from "styled-components";
import { DARK_BACKGROUND_COLOR_PRIMARY, DARK_BACKGROUND_COLOR_SECONDARY, DARK_FONT_COLOR_PRIMARY, LIGHT_BACKGROUND_COLOR_PRIMARY, LIGHT_BACKGROUND_COLOR_SECONDARY, LIGHT_FONT_COLOR_PRIMARY } from "./constants";

function DCButton(props) {
    const { dark } = props;
    
    const Button = styled.button`
        backgroundColor: ${dark ? DARK_BACKGROUND_COLOR_PRIMARY : LIGHT_BACKGROUND_COLOR_PRIMARY}
        &:hover {
            backgroundColor: ${dark ? DARK_BACKGROUND_COLOR_SECONDARY : LIGHT_BACKGROUND_COLOR_SECONDARY}
        }
        color: ${dark ? LIGHT_FONT_COLOR_PRIMARY : DARK_FONT_COLOR_PRIMARY}
    `;

    return (
        <Button {...props}>{props.children}</Button>
    );
}