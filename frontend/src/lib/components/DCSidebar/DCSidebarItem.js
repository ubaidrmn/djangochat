import styled from "styled-components";
import { DARK_BACKGROUND_COLOR_PRIMARY, DARK_BACKGROUND_COLOR_SECONDARY, LIGHT_BACKGROUND_COLOR_PRIMARY, LIGHT_BACKGROUND_COLOR_SECONDARY } from "../constants";

function DCSidebarItem(props) {

    const { active } = props;

    const Item = styled.div`
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-weight: 600;
        cursor: pointer;
        padding-left: 20px;
        background-color: ${active ? DARK_BACKGROUND_COLOR_SECONDARY : DARK_BACKGROUND_COLOR_PRIMARY};
        color: ${active ? LIGHT_BACKGROUND_COLOR_PRIMARY : LIGHT_BACKGROUND_COLOR_SECONDARY};
        &:hover {
            background-color: ${DARK_BACKGROUND_COLOR_SECONDARY};
        }
    `;

    return (
        <Item {...props}>{props.children}</Item>
    );
}

export default DCSidebarItem;
