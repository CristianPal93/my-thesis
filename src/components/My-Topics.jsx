import React, {useState} from "react";
import styles from "../style";
import {Footer, Navbar, ItemTable} from "./index";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {my_topics} from '../constants'
// Table row component that displays an item and a button to choose it
const TableRow = ({ item }) => {
    const navigate = useNavigate();
    const handleClickDelete = (item) => {
        console.log("Delete topic form")
    };
    const handleClickUpdate = (item) => {
        console.log("Update topic form")
    };
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                {item.id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {item.topic_title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {item.description}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right ">
                <a
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleClickDelete(item)
                    }
                >
                    {item.action[0]}
                </a>
                <br></br>
                <a
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleClickUpdate(item)
                    }
                >
                    {item.action[1]}
                </a>
            </td>
        </tr>

    );
};

const My_Topics = () => {
    const loggedInUser = localStorage.getItem("authenticated");
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();
    const prop  = location.state.user;
    console.log("Username is"+prop);
    const myArray = my_topics.filter(top => top.user == prop)[0].current_topics
    console.log(myArray);
    if (!loggedInUser) {
        return <Navigate replace to="/login" />;
    }
    function handleClick(){
        console.log("Add topics!")
    }

    return(
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='My Topics' username={prop}/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500  h-screen w-screen ${styles.flexStart} overflow-hidden z-50`}>

                <div className={`${styles.boxWidth}`}>
                    <div className="w-full md:mt-0 mt-6">
                        <h2 className={`${styles.heading1}  text-left`}>
                            My Topics<br className="sm:block hidden"/>
                        </h2>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="py-3 pl-2">
                                    <div className="relative max-w-xs">
                                        <button
                                            onClick={() => handleClick()}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:blue_gradient">
                                            Add Topic
                                        </button>
                                    </div>
                                </div>

                                <div className="p-1.5 w-full inline-block align-middle">
                                    <div className="overflow-x-auto border rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Topic Title
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                            {myArray.map(item => (
                                                <TableRow
                                                    key={item.id}
                                                    item={item}
                                                    onChoose={selected => setSelectedItem(selected) }
                                                />
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>



    );
}

export default My_Topics