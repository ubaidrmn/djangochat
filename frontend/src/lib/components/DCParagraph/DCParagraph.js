import styled from "styled-components";
import { LIGHT_FONT_COLOR_PRIMARY } from "../constants";

function DCParagraph(props) {
    const P = styled.p`
        color: ${LIGHT_FONT_COLOR_PRIMARY};
        margin: 0px;
        padding: 0px;
    `;
    return <P {...props}>{props.children}</P>
}

export default DCParagraph;