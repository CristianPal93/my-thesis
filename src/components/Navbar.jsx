import {useState} from "react";
import {close,logo,menu} from "../assets";
import {navLinksProfessor, navLinksStudent} from "../constants";
import {useNavigate} from "react-router";
import styles from '../style'
import {useLocation} from "react-router-dom";



const Navbar = (current_page) => {
    const [active, setActive] = useState(current_page.name);
    const [toggle, setToggle] = useState(false);
    const role = localStorage.getItem("role");
    const topic = localStorage.getItem("hasTopic");
    const username=current_page.username;
    let navLinks;
    if (role === 'student'){
        navLinks = navLinksStudent;
        if(topic == 'true'){
            navLinks = navLinks.filter(nav => nav.id !== 'topics')
        }
    } else {
        navLinks = navLinksProfessor;
    }
    const navigate = useNavigate();
    const handleClick = (button) =>  {
        console.log(button.title);
        if (button.id === 'log-out'){
            console.log(button.title+" was clicked");
            localStorage.setItem("hasTopic", false);
            // localStorage.setItem("role",'');
            localStorage.clear()
            navigate('/login');
        }
        else if(button.id === 'home'){
            console.log(button.title+" was clicked");
            navigate('/dashboard',{state:{user:current_page.username}});
        }
        else if(button.id === 'my-thesis'){
            console.log(button.title+" was clicked");
            navigate('/my-thesis',{state:{user:current_page.username}});
        }
        else if(button.id === 'topics') {
            console.log(button.title + " was clicked");
            navigate('/topics',{state:{user:current_page.username}});
        }else if(button.id === 'my-student') {
            console.log(button.title + " was clicked");
            navigate('/my-student', {state: {user: current_page.username}});
        }else if(button.id === 'my-topics'){
                console.log("Navigating to my topics and username is:"+username);
                navigate('/my-topics',{state:{user:username}});
        }else{
            console.log(button.title+" is not declared in handle action...");
        }
    }

    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/*<img src={logo} alt="logo" className="w-[100px] h-[50px]" />*/}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav,index) => (
                    <li key={nav.id} className={`feedback-card font-poppins font-normal ` +
                    `cursor-point [16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-cyan-500 mr-10`}
                    >
                        <a onClick={() => handleClick(nav)}>
                            {nav.title}
                        </a>
                    </li>
                ))}

            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center ">
                {!toggle ? <svg
                    src={toggle ? close : menu}
                    alt="close"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                    viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                    :
                    <img
                    src={close}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                    fill="black"
                />
                }
                <div
                    className={`z-50 ${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="z-50 list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`z-50 feedback-card font-poppins font-medium cursor-pointer text-[16px]  ${
                                    active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}` }
                                onClick={() => setActive(nav.title)}
                                >
                                <a onClick={() => handleClick(nav)}>
                                    {nav.title}
                                </a>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar