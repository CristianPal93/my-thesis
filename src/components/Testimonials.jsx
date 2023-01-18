import {feedback} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {useNavigate} from "react-router";


const Testimonials = (current_user) => {
    const navigate = useNavigate();
    const hasTopic = localStorage.getItem("hasTopic");
    const role = localStorage.getItem("role");
    console.log(current_user.username);
    const handleClick = (link) => {
        navigate(link,{state:{user:current_user.username}})
    }
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"/>

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[5]">


                <div className="w-full md:mt-0 mt-6">

                    {hasTopic === 'false' ? ( role === 'student' ? <h2 className={`${styles.heading1}  text-left max-w-[450px]`}>
                            Choose your topic NOW! <br className="sm:block hidden"/>
                            <div className="mt-6">
                                <button
                                    onClick={() => handleClick('/topics')}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:blue_gradient">
                                    Choose Topic
                                </button>
                            </div>
                        </h2>
                        :
                        <h2 className={`${styles.heading1}  text-left max-w-[450px]`}>
                        Checkout your students work! <br className="sm:block hidden"/>
                        <div className="mt-6">
                        <button
                        onClick={() => handleClick('/my-student')}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:blue_gradient">
                        Check Work
                        </button>
                        </div>
                        </h2>
                        )
                        :
                        <h2 className={`${styles.heading1}  text-left max-w-[450px]`}>
                            Continue working on your topic NOW! <br className="sm:block hidden"/>
                            <div className="mt-6">
                                <button
                                    onClick={() => handleClick('/my-thesis')}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:blue_gradient">
                                    Continue Working
                                </button>
                            </div>
                        </h2>
                    }
                </div>


            </div>
            {/*<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[5]">*/}

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
            </div>
        </section>
    );
}

export default Testimonials;