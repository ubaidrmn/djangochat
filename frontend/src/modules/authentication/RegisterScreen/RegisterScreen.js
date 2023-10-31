import { Link } from "react-router-dom";
import DCButton from "../../../lib/components/DCButton/DCButton";
import DCHeadingLarge from "../../../lib/components/DCHeading/DCHeadingLarge";
import DCInputBox from "../../../lib/components/DCInputBox/DCInputBox";
import DCParagraph from "../../../lib/components/DCParagraph/DCParagraph";
import { DARK_BACKGROUND_COLOR_PRIMARY, LIGHT_FONT_COLOR_PRIMARY } from "../../../lib/components/constants";
import { useEffect, useState } from "react";
import { useCreateUserMutation } from "../userApi";

function RegisterScreen() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [ createUser, result ] = useCreateUserMutation()

    useEffect(() => {
        console.log(result)
    }, [result])

    const submitForm = () => {
        const body = {
            username,
            fullname,
            email,
            password
        }
        console.log(body)
        createUser(body);
    }

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
                    <DCInputBox value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <DCInputBox value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <DCInputBox value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Fullname" />
                    <DCInputBox value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <DCButton onClick={submitForm}>Register</DCButton>
                    <DCParagraph style={{textAlign: "center", marginTop: "20px"}}>Already have an account? <Link style={{color: "inherit"}} to="/login">Login</Link></DCParagraph>
                </div>
            </div>
        </>
    );
}

export default RegisterScreen;
