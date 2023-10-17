import styled from "styled-components";
import { LIGHT_BACKGROUND_COLOR_SECONDARY, LIGHT_FONT_COLOR_PRIMARY } from "../constants";

function DCSidebarAccountItem(props) {

    const { fullname, profilePictureUrl } = props;

    const AccountItem = styled.div`
        display: flex;
        flex-direction: row;
        margin-bottom: 25px;
    `;

    const ProfilePicture = styled.img`
        border-radius: 100%;
        min-width: 50px;
        max-width: 50px;
        min-height: 50px;
        max-height: 50px;
        background-color: transparent;
    `;

    const Name = styled.p`
        color: ${LIGHT_FONT_COLOR_PRIMARY};
        font-weight: 600;
        margin-left: 20px;
    `;

    return (
        <AccountItem {...props}>
            <ProfilePicture src={profilePictureUrl === undefined ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHELPqkzJjAKkGNI8DGaLOaUKt7NiTNyLoXvPNwjJg552K3FVZXB1fYGM2jdhyQNDk7Bc&usqp=CAU" : profilePictureUrl} />
            <Name>{fullname}</Name>
        </AccountItem>
    );
}

export default DCSidebarAccountItem;
