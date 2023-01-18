import React from "react";
import EventCalendar from "./EventCalendat";
import styles from "../style";
import {events} from "../constants";

const Main = () => {
    return(

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">

            <h2 className={styles.heading2}>
                Upcoming Events! <br className="sm:block hidden"/>

            </h2>

            <div className="w-full flex justify-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[5]">
                {events.map((event) => <EventCalendar key={event.id} {...event}/>)}
            </div>
        </div>
    )
}

export default Main