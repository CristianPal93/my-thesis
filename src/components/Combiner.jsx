import React from "react";
import styles from "../style";
import {EditorWrapper, Footer, Chat, Navbar} from "./index";
import {useLocation} from "react-router-dom";

const Combiner = () => {
    const location = useLocation();
    const prop  = location.state.topic;
    const username = location.state.student_name;
    const role = localStorage.getItem("role");

    return(
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='Work' username={username}/>
                </div>
            </div>
            <div className="{`${styles.paddingX} ${styles.flexCenter}`}">
                {role === 'student' ? <h2 className={`${styles.heading1}  text-left`}>
                    Start Working on Your Thesis<br className="sm:block hidden"/>
                </h2> :
                    <h2 className={`${styles.heading1}  text-left`}>
                        Review students work<br className="sm:block hidden"/>
                    </h2>
                }
            </div>
            <div className="w-full flex py-6 justify-between items-center">

                <div className="w-full md:w-60 lg:w-1/3 p-4">
                    <Chat prop={prop} username={username}/>
                </div>
                <div className="w-full flex md:w-1/2 lg:w-full p-4">

                    <EditorWrapper/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.paddingX} ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>
    );
}

export default Combiner
