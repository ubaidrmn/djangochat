import React from "react";
import DCSidebar from "../../../lib/components/DCSidebar/DCSidebar";
import DCSidebarItem from "../../../lib/components/DCSidebar/DCSidebarItem";

function Navbar() {
    return (
        <DCSidebar user={{
            fullname: "Ubaid Rehman"
        }}>
            <DCSidebarItem active>Chats</DCSidebarItem>
            <DCSidebarItem>Settings</DCSidebarItem>
            <DCSidebarItem>Sign out</DCSidebarItem>
        </DCSidebar>
    );
}

export default Navbar;
