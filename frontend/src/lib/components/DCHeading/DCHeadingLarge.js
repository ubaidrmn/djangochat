import { styled } from "styled-components"
import { DARK_BACKGROUND_COLOR_PRIMARY, DARK_BACKGROUND_COLOR_SECONDARY, LIGHT_BACKGROUND_COLOR_PRIMARY } from "../constants";

function DCHeadingLarge(props) {
    const H1 = styled.h1`
        color: white;
        margin: 0px;
        padding: 0px;
    `;

    return <H1 {...props}>{props.children}</H1>
}

export default DCHeadingLarge;