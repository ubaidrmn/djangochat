import styled from "styled-components";
import DCSidebarAccountItem from "./DCSidebarAccountItem";

function DCSidebar(props) {

    const { fullname, profilePictureUrl } = props.user;

    const Sidebar = styled.div`
        padding: 25px;
        max-width: 300px;
        width: 100%;
        background-color: rgb(17 24 39);
        height: 100%;
        margin: 0px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    `;

    return (
        <Sidebar {...props}>
            <DCSidebarAccountItem profilePictureUrl={profilePictureUrl} fullname={fullname} />
            {props.children}
        </Sidebar>
    );
}

export default DCSidebar;
