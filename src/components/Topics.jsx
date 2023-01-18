import React from "react";
import styles from "../style";
import {Footer, Navbar, ItemTable} from "./index";
import {Navigate, useLocation} from "react-router-dom";


const Topics = () => {
    const loggedInUser = localStorage.getItem("authenticated");
    const location = useLocation();
    const prop  = location.state.user;
    if (!loggedInUser) {
        return <Navigate replace to="/login" />;
    }

    return(
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='Topics' username={prop}/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500  h-screen w-screen ${styles.flexStart} overflow-hidden z-50`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="w-full md:mt-0 mt-6">
                        <h2 className={`${styles.heading1}  text-left`}>
                            Topics<br className="sm:block hidden"/>
                        </h2>
                    </div>
                    <div><ItemTable prop={prop}/>

                    </div>
                </div>
            </div>

            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.paddingX} ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>
        // {/*</div>*/}

    )
}

export default Topics