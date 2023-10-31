import { styled } from "styled-components";
import { DARK_BACKGROUND_COLOR_PRIMARY, DARK_BACKGROUND_COLOR_SECONDARY, DARK_FONT_COLOR_PRIMARY, LIGHT_BACKGROUND_COLOR_PRIMARY, LIGHT_BACKGROUND_COLOR_SECONDARY, LIGHT_FONT_COLOR_PRIMARY } from "../constants";

const Button = styled.button`
    background-color: ${props => props.dark ? DARK_BACKGROUND_COLOR_PRIMARY : LIGHT_BACKGROUND_COLOR_PRIMARY};
    color: ${props => props.dark ? LIGHT_FONT_COLOR_PRIMARY : DARK_FONT_COLOR_PRIMARY};
    max-width: 100%;
    width: 100%;
    border: 0px;
    outline: none;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 10px;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
`;

function DCButton(props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

export default DCButton;