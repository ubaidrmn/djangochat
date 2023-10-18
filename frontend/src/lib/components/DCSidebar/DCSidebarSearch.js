import { styled } from "styled-components";
import { DARK_BACKGROUND_COLOR_SECONDARY, LIGHT_BACKGROUND_COLOR_PRIMARY } from "../constants";

function DCSidebarSearch(props) {
    const Input = styled.input`
        max-width: 100%:
        width: 100%;
        background-color: ${DARK_BACKGROUND_COLOR_SECONDARY};
        border: 0px;
        color: ${LIGHT_BACKGROUND_COLOR_PRIMARY};
        outline: none;
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-weight: 600;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        font-size: 16px;

    `;

    return (
        <Input placeholder="Search Friends" {...props} />
    );
}

export default DCSidebarSearch;