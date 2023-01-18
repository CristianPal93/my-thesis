import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export default function App(){
    const [authenticated, setauthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {

            setauthenticated(loggedInUser);
        }
    }, [authenticated]);
    const loggedInUser = localStorage.getItem("authenticated");
    if (!loggedInUser) {
        return <Navigate replace to="/login" />;
    } else {
        return <Navigate replace to="/dashboard" />;
    }

};


