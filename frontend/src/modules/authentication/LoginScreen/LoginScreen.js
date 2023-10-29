import { Link } from "react-router-dom";
import DCButton from "../../../lib/components/DCButton/DCButton";
import DCHeadingLarge from "../../../lib/components/DCHeading/DCHeadingLarge";
import DCInputBox from "../../../lib/components/DCInputBox/DCInputBox";
import { DARK_BACKGROUND_COLOR_PRIMARY, LIGHT_FONT_COLOR_PRIMARY } from "../../../lib/components/constants";
import DCParagraph from "../../../lib/components/DCParagraph/DCParagraph";

function LoginScreen() {
    return (
        <>
            <div style={{
                backgroundColor: DARK_BACKGROUND_COLOR_PRIMARY, 
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <div style={{
                    maxWidth: "500px",
                    width: "100%",
                    margin: "0px auto"
                }}>
                    <DCHeadingLarge style={{textAlign: "center"}}>Login</DCHeadingLarge>
                    <DCInputBox placeholder="Username" />
                    <DCInputBox type="password" placeholder="Password" />
                    <DCButton>Login</DCButton>
                    <DCParagraph style={{textAlign: "center", marginTop: "20px"}}>Don't have an account? <Link style={{color: "inherit"}} to="/register">Register</Link></DCParagraph>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;
