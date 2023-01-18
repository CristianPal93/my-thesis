import { sponsors } from "../constants";
import styles from "../style";
import {butterfly} from "../assets";

const Sponsors = () => (

    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {sponsors.map((sponsor) => (
                <div key={sponsor.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img src={sponsor.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </section>

);

export default Sponsors;