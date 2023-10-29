import { Link } from "react-router-dom";
import DCButton from "../../../lib/components/DCButton/DCButton";
import DCHeadingLarge from "../../../lib/components/DCHeading/DCHeadingLarge";
import DCInputBox from "../../../lib/components/DCInputBox/DCInputBox";
import DCParagraph from "../../../lib/components/DCParagraph/DCParagraph";
import { DARK_BACKGROUND_COLOR_PRIMARY, LIGHT_FONT_COLOR_PRIMARY } from "../../../lib/components/constants";

function RegisterScreen() {
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
                    <DCHeadingLarge style={{textAlign: "center"}}>Create a new account</DCHeadingLarge>
                    <DCInputBox placeholder="Username" />
                    <DCInputBox placeholder="Email" />
                    <DCInputBox type="password" placeholder="Password" />
                    <DCButton>Register</DCButton>
                    <DCParagraph style={{textAlign: "center", marginTop: "20px"}}>Already have an account? <Link style={{color: "inherit"}} to="/login">Login</Link></DCParagraph>
                </div>
            </div>
        </>
    );
}

export default RegisterScreen;
