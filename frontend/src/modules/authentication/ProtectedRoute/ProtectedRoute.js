import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
    const navigate = useNavigate();
    const state = useSelector(state => state);

    useEffect(() => {
        if (!state.user.loggedIn) {
            navigate("/login");
        }
    }, [state.user])

    return props.children
}

export default ProtectedRoute;
