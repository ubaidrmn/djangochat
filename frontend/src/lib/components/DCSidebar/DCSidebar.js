import styled from "styled-components";
import DCSidebarAccountItem from "./DCSidebarAccountItem";
import DCSidebarSearch from "./DCSidebarSearch";

function DCSidebar(props) {

    const { fullname, profilePictureUrl } = props.user;

    const Sidebar = styled.div`
        padding: 25px;
        max-width: 100%;
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
            <DCSidebarSearch />
            {props.children}
        </Sidebar>
    );
}

export default DCSidebar;
