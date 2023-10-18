import { styled } from "styled-components"
import DCChatBox from "../../../lib/components/DCChatBox/DCChatBox";
import DCChatBoxProfile from "../../../lib/components/DCChatBox/DCChatBoxProfile";

function ChatScreen(props) {

    const Grid = styled.div`
        max-width: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 0.75fr 0.25fr;
        border-left: 1px solid rgb(76 96 138);
    `;

    return <Grid>
        <DCChatBox />
        <DCChatBoxProfile />
    </Grid>
}

export default ChatScreen;
