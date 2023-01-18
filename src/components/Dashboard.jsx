import { useEffect, useState } from "react";
import styles from '../style';
import {Navbar,Footer,Main,Testimonials,Sponsors} from "./index";
import { Navigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    const loggedInUser = localStorage.getItem("authenticated");
    const location = useLocation();
    const username = location.state.user
    useEffect(() => {
    if (!loggedInUser) {
        return <Navigate replace to="/login"/>;
        }
    }, [authenticated]);

    return (
            <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar name='Home' username={username}/>
                    </div>
                </div>
                <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Main/>
                    </div>
                </div>

                <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.paddingX} ${styles.flexCenter}`}>

                        <div className={`${styles.boxWidth}`}>
                            <Testimonials username={username}/>

                            <Sponsors/>
                            <Footer/>
                        </div>

                </div>
            </div>
        );
}

export default Dashboard;